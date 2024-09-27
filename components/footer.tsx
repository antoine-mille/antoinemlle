import { cn } from "@/lib/utils"
import { LinkIcon } from "./link-icon"
import { GithubIcon, LinkedinIcon } from "lucide-react"

type FooterProps = {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        "bg-gray-900 w-full flex flex-col gap-4 py-4 items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <p className="text-center text-xl font-semibold text-white">
          Antoine Mille
        </p>
        <p className="max-w-xs text-center text-sm text-gray-300">
          Codez vos idées, façonnez{" "}
          <span className="font-medium text-secondary">l’avenir</span> du{" "}
          <span className="font-medium text-secondary">web</span>.
        </p>
      </div>

      <div className="flex w-1/3 justify-center gap-3 border-t pt-3">
        <LinkIcon
          href="https://www.linkedin.com/in/antoinemlle/"
          className="inline-block rounded-full bg-blue-500 p-2 text-white"
        >
          <LinkedinIcon className="size-5" />
        </LinkIcon>
        <LinkIcon
          href="https://github.com/antoine-mille"
          className="inline-block rounded-full bg-white/90 p-2 text-gray-900"
        >
          <GithubIcon className="size-5" />
        </LinkIcon>
      </div>

      <p className="text-xs text-gray-300">
        &copy; {new Date().getFullYear()} Tous droits réservés.
      </p>
    </footer>
  )
}

export { Footer }
