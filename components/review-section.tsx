import { ReviewMarquee } from "@/components/review-marquee"
import { Section } from "@/components/section"

const ReviewSection = () => {
  return (
    <Section className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        Retrouvez des <span className="font-semibold text-secondary">avis</span>{" "}
        sur <span className="font-semibold text-secondary">mes services</span>
      </h2>
      <ReviewMarquee />
    </Section>
  )
}

export { ReviewSection }
