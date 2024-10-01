import { ReviewMarquee } from "@/components/review-marquee"
import { Section } from "@/components/section"
import { useTranslations } from "next-intl"

const ReviewSection = () => {
  const t = useTranslations("ReviewSection")
  return (
    <Section className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        {t.rich("title", {
          span: (chunks) => (
            <span className="font-semibold text-secondary">{chunks}</span>
          ),
        })}
      </h2>
      <ReviewMarquee />
    </Section>
  )
}

export { ReviewSection }
