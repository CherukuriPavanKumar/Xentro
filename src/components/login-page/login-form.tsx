import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BeamsBackground } from "../ui/beams-background"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to login to your account
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="rajnikanth@gmail.com"
            required
          />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Login
        </Button>

        {/* Divider */}
        <div className="relative text-center text-sm">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <span className="relative bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        {/* Google Button */}
        <Button
          variant="outline"
          type="button"
          className="w-full flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="18"
            height="18"
            className="shrink-0"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.63 1.22 9.09 3.6l6.77-6.77C35.13 2.44 29.88 0 24 0 14.62 0 6.48 5.38 2.69 13.22l7.91 6.15C12.17 13.2 17.56 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.1 24.5c0-1.59-.14-3.11-.41-4.57H24v8.64h12.41c-.54 2.8-2.16 5.18-4.61 6.79l7.19 5.59c4.21-3.89 6.61-9.63 6.61-16.45z"
            />
            <path
              fill="#FBBC05"
              d="M10.6 28.63c-.48-1.41-.74-2.92-.74-4.48s.26-3.07.74-4.48l-7.91-6.15C1.46 16.64 0 20.17 0 24.15s1.46 7.51 3.99 10.63l7.91-6.15z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.19-5.59c-2 1.35-4.57 2.13-8.71 2.13-6.44 0-11.83-3.7-13.4-8.82l-7.91 6.15C6.48 42.62 14.62 48 24 48z"
            />
          </svg>
          <span>Login with Google</span>
        </Button>
      </div>

      {/* Signup Link */}
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
