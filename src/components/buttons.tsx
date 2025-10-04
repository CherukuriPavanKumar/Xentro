import { GradientButton } from "@/components/ui/gradient-button"
import Link from "next/link"

export function GradientButtonDemo() {
  return (
    <div className="flex gap-8">
      <Link href="/signup"><GradientButton>Get Started</GradientButton></Link>
      <Link href="/learn-more"><GradientButton variant="variant">Learn More</GradientButton></Link>
    </div>
  )
}
