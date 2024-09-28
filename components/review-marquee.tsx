import Image, { StaticImageData } from "next/image"
import { Marquee } from "@/components/ui"
import { cn } from "@/lib/utils"

import anaellePicture from "@/public/images/reviews/anaelle-picture.jpg"

const reviews = [
  {
    name: "Anaëlle. F",
    body: "Antoine est toujours très motivé dans ce qu'il entreprend et se donne toujours à fond pour accomplir au mieux ses missions.",
    img: anaellePicture,
    smiley: "😉",
  },
]

const ReviewCard = ({
  img,
  name,
  body,
  smiley,
}: {
  img: StaticImageData
  name: string
  body: string
  smiley: string
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 h-36",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
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
      <blockquote className="mt-2 line-clamp-4 text-xs text-gray-900">
        {body}
      </blockquote>
    </figure>
  )
}

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewMarquee = () => {
  return (
    <div className="space-y-2">
      <Marquee pauseOnHover className="[--duration:10s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:10s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  )
}

export { ReviewMarquee }
