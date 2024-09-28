import { CareerSection } from "@/components/career-section"
import { DocumentSection } from "@/components/document-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio de Antoine Mille - Parcours",
  description: "Portfolio de Antoine Mille, développeur web fullstack",
}

export default function CareerPage() {
  return (
    <main className="size-full">
      <CareerSection />
      <DocumentSection />
    </main>
  )
}
