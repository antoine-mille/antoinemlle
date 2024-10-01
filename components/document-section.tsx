import { DocumentCard } from "@/components/document-card"
import { Section } from "@/components/section"
import { getTranslations } from "next-intl/server"

async function getDocuments() {
  const t = await getTranslations({ namespace: "DocumentCard" })
  return [
    {
      title: t.rich("CV.title", {
        span: (chunks) => (
          <span className="font-semibold text-secondary">{chunks}</span>
        ),
      }) as string,
      documentUrl: "/docs/cv.pdf",
      description: t("CV.description"),
    },
    {
      title: t.rich("TrainingCertificate.title", {
        span: (chunks) => (
          <span className="font-semibold text-secondary">{chunks}</span>
        ),
      }) as string,
      documentUrl: "/docs/attestation.pdf",
      description: t("TrainingCertificate.description"),
    },
  ]
}

const DocumentSection = async () => {
  const t = await getTranslations({ namespace: "DocumentSection" })
  const docs = await getDocuments()

  return (
    <Section className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        {t.rich("title", {
          span: (chunks) => (
            <span className="font-semibold text-secondary">{chunks}</span>
          ),
        })}
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
