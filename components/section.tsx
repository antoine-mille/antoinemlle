import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/magicui"

type SectionProps = {
  children: React.ReactNode
  withDotPattern?: boolean
  className?: string
  id?: string
}

const Section = ({
  children,
  withDotPattern = false,
  className,
  id,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "px-4 pt-12 md:px-12 lg:px-24",
        withDotPattern && "relative",
        className
      )}
    >
      {children}
      {withDotPattern && (
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className="-z-30 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        />
      )}
    </section>
  )
}

export { Section }
