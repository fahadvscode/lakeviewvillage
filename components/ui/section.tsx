import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Use "lg" for hero-adjacent or emphasis sections */
  size?: "default" | "lg"
  /** Alternate background for visual rhythm */
  variant?: "default" | "muted" | "primary"
  /** Contained content max-width */
  contained?: boolean
}

export function Section({
  size = "default",
  variant = "default",
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        size === "lg" ? "section-lg" : "section",
        variant === "muted" && "bg-muted/30",
        variant === "primary" && "bg-primary text-primary-foreground",
        className
      )}
      {...props}
    >
      <div className={cn(contained && "page-container")}>{children}</div>
    </section>
  )
}
