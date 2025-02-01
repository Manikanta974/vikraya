"use client"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AuthPage() {
  const { signInWithGoogle, error } = useAuth()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Vikraya
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Sign in or create an account to start trading on our blockchain-based platform.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-md space-y-4 mt-8">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Choose how you want to join Vikraya</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full button-glow" onClick={signInWithGoogle}>
                Sign in with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

