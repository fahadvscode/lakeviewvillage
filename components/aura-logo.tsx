import Image from "next/image"
import { cn } from "@/lib/utils"
import { AURA_LOGO, AURA_LOGO_ON_LIGHT } from "@/lib/images"

const LOGO_WIDTH = 1201
const LOGO_HEIGHT = 661

type AuraLogoProps = {
  /** `light` = site background; `dark` = hero overlay or dark footer */
  tone?: "light" | "dark"
  className?: string
  imageClassName?: string
  priority?: boolean
}

export function AuraLogo({
  tone = "light",
  className,
  imageClassName,
  priority = false,
}: AuraLogoProps) {
  const onLight = tone === "light"

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)}>
      <Image
        src={onLight ? AURA_LOGO_ON_LIGHT : AURA_LOGO}
        alt="Aura Lakeview Village"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className={cn(
          "h-9 w-auto object-contain sm:h-10 md:h-11 lg:h-12",
          !onLight && "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]",
          imageClassName,
        )}
      />
    </span>
  )
}
