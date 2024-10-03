import { cn } from "@/lib/utils"
import Link from "next/link"

type LinkIconProps = {
  className?: string
  children: React.ReactNode
  href: string
}

const LinkIcon = ({ className, children, href }: LinkIconProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-primary transition-colors duration-300 hover:text-secondary",
        className
      )}
      aria-label="Link to external website"
      target="_blank"
    >
      {children}
    </Link>
  )
}

export { LinkIcon }
