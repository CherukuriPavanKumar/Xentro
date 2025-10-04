import { GalleryVerticalEnd } from "lucide-react"

import { SignupForm } from "@/components/signup-page/signup-form"
import AuthHero from "../ui/auth-hero"

export default function SignupPageComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <img src="/XentroLogo.png" alt="Xentro Logo" className="h-6 w-6"/>
            </div>
            Xentro
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <AuthHero />
      </div>
    </div>
  )
}
