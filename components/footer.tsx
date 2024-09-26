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
        "min-h-36 bg-gray-900 w-full flex flex-col gap-4 py-4 items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <p className="text-center text-white text-xl font-semibold">
          Antoine Mille
        </p>
        <p className="text-gray-300 text-sm max-w-xs text-center">
          Je suis dans le{" "}
          <span className="text-secondary font-medium">
            développement informatique
          </span>{" "}
          depuis mes 13 ans.
        </p>
      </div>

      <div className="w-1/3 border-t pt-3 flex justify-center gap-3">
        <LinkIcon
          href="https://www.linkedin.com/in/antoinemlle/"
          className="text-white inline-block p-2 rounded-full bg-blue-500"
        >
          <LinkedinIcon className="size-5" />
        </LinkIcon>
        <LinkIcon
          href="https://github.com/antoine-mille"
          className="text-gray-900 inline-block p-2 rounded-full bg-white/90"
        >
          <GithubIcon className="size-5" />
        </LinkIcon>
      </div>

      <p className="text-gray-300 text-xs">
        &copy; {new Date().getFullYear()} Tous droits réservés.
      </p>
    </footer>
  )
}

export { Footer }
