import { DocumentCard } from "@/components/document-card"
import { Section } from "@/components/section"

const DocumentSection = () => {
  return (
    <Section className="grid gap-16 sm:grid-cols-2">
      <DocumentCard
        titleComponent={
          <h2 className="text-xl text-gray-900">
            Mon{" "}
            <span className="font-semibold text-secondary">
              Curriculum Vitae
            </span>
          </h2>
        }
        documentUrl="/docs/cv.pdf"
        description="Vous pouvez télécharger mon CV au format PDF."
      />
      <DocumentCard
        documentUrl="/docs/attestation.pdf"
        titleComponent={
          <h2 className="text-xl text-gray-900">
            Mon{" "}
            <span className="font-semibold text-secondary">Attestation</span> de{" "}
            <span className="font-semibold text-secondary">Formation</span>
          </h2>
        }
        description="Vous pouvez télécharger mon Attestation de Formation au format PDF."
      />
    </Section>
  )
}

export { DocumentSection }
