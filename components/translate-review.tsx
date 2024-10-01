"use client"

import { useTranslations } from "next-intl"

type TranslateReviewProps = {
  isTranslated: boolean
  needsTranslation: boolean
  setText: (text: string) => void
  textBase: string
  translatedText: string
}

const TranslateReview = ({
  isTranslated,
  needsTranslation,
  setText,
  textBase,
  translatedText,
}: TranslateReviewProps) => {
  const t = useTranslations("ReviewSection")

  if (!needsTranslation) {
    return null
  }

  const handleClick = () => {
    setText(isTranslated ? textBase : translatedText)
  }

  return (
    <button
      className="ml-auto mt-auto text-xs font-medium text-gray-900 transition-colors duration-300 hover:text-gray-900/70"
      onClick={handleClick}
    >
      {!isTranslated ? t("translateCta") : t("originalCta")}
    </button>
  )
}

export { TranslateReview }
