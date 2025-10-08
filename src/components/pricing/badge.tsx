import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-black dark:border-white bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-black dark:border-white bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-black dark:border-white bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  selected?: boolean
}

function Badge({ className, variant, selected, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        selected && "border-none",
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
