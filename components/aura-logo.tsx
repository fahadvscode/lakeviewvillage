import Image from "next/image"
import { cn } from "@/lib/utils"
import { AURA_LOGO_ON_LIGHT } from "@/lib/images"

const LOGO_WIDTH = 1201
const LOGO_HEIGHT = 661

type AuraLogoProps = {
  className?: string
  /** Logo image width inside the white panel */
  imageClassName?: string
  priority?: boolean
}

export function AuraLogo({
  className,
  imageClassName,
  priority = false,
}: AuraLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-white",
        "rounded-sm border border-border/40 px-4 py-2.5 shadow-sm sm:px-5 sm:py-3",
        className,
      )}
    >
      <Image
        src={AURA_LOGO_ON_LIGHT}
        alt="Aura Lakeview Village"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={cn(
          "block h-auto w-[min(280px,70vw)] max-w-none object-contain sm:w-[320px] lg:w-[360px]",
          imageClassName,
        )}
      />
    </span>
  )
}
