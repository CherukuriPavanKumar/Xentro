import { LoginForm } from "@/components/login-page/login-form"
import AuthHero from "../ui/auth-hero"

export default function LoginPageComponent() {
  return (
    <div className="relative grid min-h-svh lg:grid-cols-2 overflow-hidden">
      <div className="relative z-10 flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="text-primary-foreground flex size-10 items-center justify-center rounded-md">
              <img 
    src="/XENTRO-WHITE.png" 
    alt="Xentro Logo" 
    className="w-7 h-7 object-contain drop-shadow-sm dark:hidden rounded-sm"
  />
  <img 
    src="/XENTRO-DARK.png" 
    alt="Xentro Logo" 
    className="w-7 h-7 object-contain drop-shadow-sm hidden dark:block rounded-sm"
  />
            </div>
            Xentro
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right side image */}
      <div className="bg-muted relative hidden lg:block">
        <AuthHero />
      </div>
    </div>
  )
}
