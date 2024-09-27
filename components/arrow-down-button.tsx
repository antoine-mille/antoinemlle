"use client"

import { cn } from "@/lib/utils"
import { ArrowDownIcon } from "lucide-react"
import { useRouter } from "next/navigation"

type ArrowDownButtonProps = {
  className?: string
}

const ArrowDownButton = ({ className }: ArrowDownButtonProps) => {
  const route = useRouter()

  const onClick = () => {
    route.push("/#projects")
  }

  return (
    <button
      className={cn(
        "group cursor-pointer w-fit rounded-full bg-primary p-3 transition-colors duration-300 hover:bg-secondary",
        className
      )}
      onClick={onClick}
    >
      <ArrowDownIcon className="size-6 text-primary-foreground transition-colors duration-300 group-hover:text-secondary-foreground" />
    </button>
  )
}

export { ArrowDownButton }
