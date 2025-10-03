import { RainbowButton } from "@/components/navbar/rainbow-button"
import { GradientButton } from "@/components/ui/gradient-button"

export function RainbowButtonDemo() {
  return <RainbowButton>Get Unlimited Access</RainbowButton>;
}

export function GradientButtonDemo() {
  return (
    <div className="flex gap-8">
      <GradientButton>Get Started</GradientButton>
      <GradientButton variant="variant">Learn More</GradientButton>
    </div>
  )
}
