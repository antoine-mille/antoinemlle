import { Marquee } from "@/components/ui"

import anaellePicture from "@/public/images/reviews/anaelle-picture.jpg"
import florentPicture from "@/public/images/reviews/florent-picture.jpg"
import julienPicture from "@/public/images/reviews/julien-picture.jpeg"
import { getLocale, getTranslations } from "next-intl/server"
import { ReviewCard } from "@/components/review-card"

async function getReview() {
  const t = await getTranslations({ namespace: "ReviewCard" })
  return [
    {
      name: "Anaëlle. F",
      body: "Antoine est toujours très motivé dans ce qu'il entreprend et se donne toujours à fond pour accomplir au mieux ses missions.",
      img: anaellePicture,
      smiley: "😉",
      translatedText: t("1"),
    },
    {
      name: "Florent. M",
      body: "Antoine se distingue par son sérieux, sa rigueur et sa grande versatilité. Son excellent travail témoigne d'un grand professionnalisme.",
      img: florentPicture,
      smiley: "👍",
      translatedText: t("2"),
    },
    {
      name: "Julien. D",
      body: "Antoine saura faire preuve de professionnalisme et d’une grande qualité de travail au sein de vos projets. C'est un élément que j'ai adoré avoir au sein de mon équipe, il a été crucial pour la réussite de nos projets.",
      img: julienPicture,
      smiley: "💪",
      translatedText: t("3"),
    },
    {
      name: "Fabio. M",
      body: "Un développeur toujours partant pour collaborer. Il a su rendre nos designs complexes, simples et agréables à utiliser, tout en travaillant avec rigueur et efficacité.",
      img: "https://avatar.vercel.sh/fabio",
      smiley: "🚀",
      translatedText: t("4"),
    },
    {
      name: "Gaben. T",
      body: "Passionné et impliqué dans son travail, Antoine fait preuve de rigueur afin d'atteindre les objectifs visés. Je suis vivement reconnaissant et m'estime chanceux d'avoir pu compter sur son aide au cours de ces dernières années.",
      img: "https://avatar.vercel.sh/gaben",
      smiley: "💯",
      translatedText: t("5"),
    },
  ]
}

const ReviewMarquee = async () => {
  const locale = await getLocale()
  const reviews = await getReview()

  const needsTranslation = locale !== "fr"

  return (
    <Marquee pauseOnHover className="[--duration:25s]">
      {reviews.map((review) => (
        <ReviewCard
          key={review.name}
          needsTranslation={needsTranslation}
          {...review}
        />
      ))}
    </Marquee>
  )
}

export { ReviewMarquee }
