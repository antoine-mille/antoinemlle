"use client"

import { ShinyButton } from "@/components/magicui"

type DocumentCardProps = {
  titleComponent: React.ReactNode
  description: string
  documentUrl: string
}

const DocumentCard = ({
  titleComponent,
  description,
  documentUrl,
}: DocumentCardProps) => {
  const handleClick = () => window.open(documentUrl, "_blank")

  return (
    <div className="flex flex-col gap-1.5">
      {titleComponent}
      <p className="text-xs text-gray-500 sm:text-sm">{description}</p>
      <ShinyButton onClick={handleClick} className="ml-auto mt-auto w-fit">
        Ouvrir
      </ShinyButton>
    </div>
  )
}

export { DocumentCard }
