"use client"

import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import { TranslateReview } from "@/components/translate-review"
import { useEffect, useState } from "react"

type TranslateReviewProps = {
  needsTranslation: boolean
  img: StaticImageData | string
  name: string
  body: string
  smiley: string
  translatedText: string
}

const ReviewCard = ({
  needsTranslation,
  img,
  name,
  body,
  smiley,
  translatedText,
}: TranslateReviewProps) => {
  const [isLeave, setIsLeave] = useState(false)
  const [text, setText] = useState(body)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (isLeave) {
      timeout = setTimeout(() => {
        setText(body)
        setIsLeave(false)
      }, 1500)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [body, isLeave])

  const handleMouseLeave = () => {
    if (!needsTranslation || text === body) return
    setIsLeave(true)
  }

  const isTranslated = text !== body

  return (
    <figure
      className={cn(
        "relative w-80 overflow-hidden rounded-xl border p-4 flex flex-col gap-2.5",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            className="size-10 rounded-full object-cover object-center"
            width={40}
            height={40}
            alt={`${name}'s avatar`}
            src={img}
          />
          <figcaption className="text-sm font-semibold text-primary">
            {name}
          </figcaption>
        </div>
        <span>{smiley}</span>
      </div>
      <blockquote
        className={cn(
          "line-clamp-5 text-xs text-gray-900",
          isTranslated && "italic"
        )}
      >
        {text}
      </blockquote>
      <TranslateReview
        isTranslated={isTranslated}
        needsTranslation={needsTranslation}
        setText={setText}
        textBase={body}
        translatedText={translatedText}
      />
    </figure>
  )
}

export { ReviewCard }
