import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function RegistrationForm({ isGoogleSignUp = false }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{isGoogleSignUp ? "Complete Registration" : "Register"}</CardTitle>
        <CardDescription>
          {isGoogleSignUp
            ? "Please provide additional information to complete your registration"
            : "Create a new account to start using Vikraya"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" min="18" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" placeholder="Farmer/Buyer/Trader" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City, State, Country" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="photo">Profile Photo</Label>
            <Input id="photo" type="file" accept="image/*" required />
          </div>
          {!isGoogleSignUp && (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
              </div>
            </>
          )}
          <Button type="submit" className="w-full">
            {isGoogleSignUp ? "Complete Registration" : "Register"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
