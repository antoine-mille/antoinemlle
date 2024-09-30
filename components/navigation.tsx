import { Link } from "@/i18n/routing"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui"
import { LinkedinIcon, MenuIcon } from "lucide-react"
import { LinkIcon } from "@/components/link-icon"
import { getTranslations } from "next-intl/server"
import { FR, GB } from "country-flag-icons/react/3x2"

async function getLinks() {
  const t = await getTranslations({ namespace: "Links" })
  return [
    { href: "/services", label: t("services") },
    { href: "/#projects", label: t("portfolio") },
    { href: "/career", label: t("career") },
    { href: "/#contact", label: t("contact") },
  ]
}

const HeaderLeft = () => {
  return (
    <Link
      href="/"
      className="text-lg font-semibold uppercase text-primary transition-colors duration-300 hover:text-secondary lg:text-xl"
    >
      Antoine Mille
    </Link>
  )
}

const MobileNavigation = async () => {
  const links = await getLinks()
  const mobileNavigation = await getTranslations({
    namespace: "MobileNavigation",
  })
  const languageSwitcher = await getTranslations({
    namespace: "LanguageSwitcher",
  })

  console.log(links)

  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <MenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-0">
        <SheetTitle className="text-gray-900">
          {mobileNavigation("title")}
        </SheetTitle>
        <SheetDescription>{mobileNavigation("description")}</SheetDescription>
        <nav className="mt-20 flex flex-col items-end gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-semibold uppercase text-primary transition-colors duration-300 hover:text-secondary"
            >
              <SheetClose>{link.label}</SheetClose>
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-3 border-t pt-5">
          <p className="inline-flex items-center gap-3 text-sm text-gray-900">
            {mobileNavigation("socials")}
            <LinkIcon href="https://www.linkedin.com/in/antoinemlle/">
              <LinkedinIcon className="size-5 lg:size-6" />
            </LinkIcon>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-900">{languageSwitcher("title")}</p>
            <Link href="/" locale="en">
              <GB title="United States" className="size-5 hover:opacity-60" />
            </Link>
            <Link href="/" locale="fr">
              <FR title="United States" className="size-5 hover:opacity-60" />
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const Navigation = async () => {
  const links = await getLinks()
  return (
    <nav className="hidden gap-12 sm:flex">
      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-semibold text-gray-900 transition-colors duration-300 hover:text-secondary"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center border-l pl-6">
        <LinkIcon href="https://www.linkedin.com/in/antoinemlle/">
          <LinkedinIcon className="size-5 lg:size-6" />
        </LinkIcon>
      </div>
    </nav>
  )
}

const Header = () => {
  return (
    <header className="flex min-h-20 w-full items-center justify-between px-4 md:px-12 lg:px-24">
      <HeaderLeft />
      <Navigation />
      <MobileNavigation />
    </header>
  )
}

export { Header }
