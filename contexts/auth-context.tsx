"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth"
import { auth, db } from "@/lib/firebase"
import { doc, setDoc, getDoc } from "firebase/firestore"

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  signInWithGoogle: async () => {},
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUser(user)
          try {
            const userDoc = await getDoc(doc(db, "users", user.uid))
            if (!userDoc.exists()) {
              window.location.href = "/complete-profile"
            }
          } catch (e) {
            console.error("Error checking user document:", e)
          }
        } else {
          setUser(null)
        }
        setLoading(false)
      })

      return () => unsubscribe()
    } catch (e) {
      console.error("Auth initialization error:", e)
      setError("Authentication initialization failed. Please check your configuration.")
      setLoading(false)
    }
  }, [])

  const signInWithGoogle = async () => {
    try {
      setError(null)
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)

      try {
        const userDoc = await getDoc(doc(db, "users", result.user.uid))
        if (!userDoc.exists()) {
          await setDoc(doc(db, "users", result.user.uid), {
            email: result.user.email,
            name: result.user.displayName,
            createdAt: new Date(),
          })
          window.location.href = "/complete-profile"
        }
      } catch (e) {
        console.error("Error creating user document:", e)
        setError("Failed to create user profile. Please try again.")
      }
    } catch (e) {
      console.error("Error signing in with Google:", e)
      setError("Failed to sign in with Google. Please check your configuration and try again.")
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth)
    } catch (e) {
      console.error("Error signing out:", e)
      setError("Failed to sign out. Please try again.")
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, signInWithGoogle, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

