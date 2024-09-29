import { ContactForm } from "@/components/contact-form"
import { Section } from "@/components/section"
import { useTranslations } from "next-intl"

const ContactSection = () => {
  const t = useTranslations("ContactSection")

  return (
    <Section id="contact" className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        {t.rich("title", {
          span: (chunks) => (
            <span className="font-semibold text-secondary">{chunks}</span>
          ),
        })}
      </h2>
      <ContactForm />
    </Section>
  )
}

export { ContactSection }
