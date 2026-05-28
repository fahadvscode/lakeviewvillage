import Image from "next/image"
import { cn } from "@/lib/utils"
import { AURA_LOGO } from "@/lib/images"

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
        "px-5 py-3 shadow-sm",
        className,
      )}
    >
      <Image
        src={AURA_LOGO}
        alt="Aura Lakeview Village"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={cn(
          "h-auto w-[min(320px,72vw)] max-w-none object-contain sm:w-[360px] lg:w-[400px]",
          imageClassName,
        )}
      />
    </span>
  )
}
