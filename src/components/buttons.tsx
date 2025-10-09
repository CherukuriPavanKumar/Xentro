import { GradientButton } from "@/components/ui/gradient-button"
import Link from "next/link"
import { Button } from "./ui/button"

export function GradientButtonDemo() {
  return (
    <div className="flex gap-8">
      <Link href="/signup">
      <Button
  className="
    inline-flex items-center justify-center
    rounded-[11px] min-w-[132px] px-9 py-6.5
    text-base leading-[19px] font-bold font-sans
    bg-black dark:bg-white 
    
    shadow-none focus:outline-none focus:ring-2 focus:ring-foreground/30 active:scale-95
  "
>
  Get Started
</Button>
      </Link>
      <Link href="/learn-more">
      <Button
  className="
    inline-flex items-center justify-center
    rounded-[11px] min-w-[132px] px-9 py-6.5
    text-base leading-[19px] font-bold font-sans
    bg-white dark:bg-black border border-foreground/40 text-foreground
    hover:bg-foreground/10 hover:border-foreground/40
    shadow-none focus:outline-none focus:ring-2 focus:ring-foreground/30 active:scale-95
  "
>
  Learn More
</Button>
      </Link>

    </div>
  )
}
