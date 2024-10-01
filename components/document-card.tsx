"use client"

import { ShinyButton } from "@/components/magicui"
import { useTranslations } from "next-intl"

type DocumentCardProps = {
  title: string
  description: string
  documentUrl: string
}

const DocumentCard = ({
  title,
  description,
  documentUrl,
}: DocumentCardProps) => {
  const t = useTranslations("DocumentCard")
  const handleClick = () => window.open(documentUrl, "_blank")

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-lg text-gray-900">{title}</p>
      <p className="text-xs text-gray-500 sm:text-sm">{description}</p>
      <ShinyButton onClick={handleClick} className="ml-auto mt-auto w-fit">
        {t("cta")}
      </ShinyButton>
    </div>
  )
}

export { DocumentCard }
