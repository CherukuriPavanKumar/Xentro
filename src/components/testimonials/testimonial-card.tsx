import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/testimonials/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
  {...(href ? { href } : {})}
  className={cn(
    "flex flex-col rounded-2xl border border-border/40 shadow-sm", // softer, more modern
    "bg-gradient-to-b from-muted to-background", // background
    "p-6 sm:p-8 text-start", // more spacious padding
    "hover:shadow-md hover:-translate-y-1", // subtle lift on hover
    "transition-all duration-300 ease-in-out",
    "max-w-[360px] min-h-[240px]", // taller, wider card
    className
  )}
>
  <div className="flex items-center gap-3">
    <Avatar className="h-14 w-14 ring-2 ring-primary/20">
      <AvatarImage src={author.avatar} alt={author.name} />
    </Avatar>
    <div className="flex flex-col items-start">
      <h3 className="text-lg font-semibold leading-none">
        {author.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {author.handle}
      </p>
    </div>
  </div>
  <p className="sm:text-md mt-6 text-sm leading-relaxed text-muted-foreground">
    {text}
  </p>
</Card>

  )
}