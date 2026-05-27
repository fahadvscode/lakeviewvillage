import { cn } from "@/lib/utils"

/**
 * Displays a "Last updated" date for SEO freshness signals.
 * Update the date when page content is revised.
 */
export function LastUpdated({ date = "March 2025", className }: { date?: string; className?: string }) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)} aria-label={`Content last updated ${date}`}>
      Last updated: {date}
    </p>
  )
}
