import { DocumentCard } from "@/components/document-card"
import { Section } from "@/components/section"

const docs = [
  {
    titleComponent: (
      <p className="text-lg text-gray-900">
        Mon{" "}
        <span className="font-semibold text-secondary">Curriculum Vitae</span>
      </p>
    ),
    documentUrl: "/docs/cv.pdf",
    description: "Vous pouvez ouvrir mon CV au format PDF.",
  },
  {
    titleComponent: (
      <p className="text-lg text-gray-900">
        Mon <span className="font-semibold text-secondary">Attestation</span> de{" "}
        <span className="font-semibold text-secondary">Formation</span>
      </p>
    ),
    documentUrl: "/docs/attestation.pdf",
    description:
      "Vous pouvez ouvrir mon Attestation de Formation au format PDF.",
  },
]

const DocumentSection = () => {
  return (
    <Section className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        Retrouvez mes{" "}
        <span className="font-semibold text-secondary">documents</span>
      </h2>
      <div className="grid gap-16 sm:grid-cols-2">
        {docs.map((doc, index) => (
          <DocumentCard key={index} {...doc} />
        ))}
      </div>
    </Section>
  )
}

export { DocumentSection }
