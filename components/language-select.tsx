"use client"

import { Link, usePathname } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { FR, GB } from "country-flag-icons/react/3x2"
import { useTranslations } from "next-intl"
import { useSearchParams } from "next/navigation"

type LanguageSelectProps = {
  className?: string
}

const LanguageSelect = ({ className }: LanguageSelectProps) => {
  const t = useTranslations("LanguageSwitcher")
  const pathname = usePathname()
  const params = useSearchParams()

  const url = `${pathname}?${new URLSearchParams(params).toString()}`

  return (
    <p
      className={cn("items-center gap-2 text-xs text-gray-300 flex", className)}
    >
      {t("title")}
      <Link href={url} locale="en">
        <GB title="United States" className="size-5 hover:opacity-60" />
      </Link>
      <Link href={url} locale="fr">
        <FR title="United States" className="size-5 hover:opacity-60" />
      </Link>
    </p>
  )
}

export { LanguageSelect }
