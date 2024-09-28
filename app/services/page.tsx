import { ReviewSection } from "@/components/review-section"
import { ServicesSection } from "@/components/services-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio de Antoine Mille - Services",
  description: "Portfolio de Antoine Mille, développeur web fullstack",
}

export default function ServicesPage() {
  return (
    <main className="size-full">
      <ServicesSection />
      <ReviewSection />
    </main>
  )
}
