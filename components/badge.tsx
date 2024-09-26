import { cn } from "@/lib/utils"

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "text-xs text-gray-700 bg-gray-200 px-2 py-1 rounded-full select-none",
        className
      )}
    >
      {children}
    </span>
  )
}

export { Badge }
