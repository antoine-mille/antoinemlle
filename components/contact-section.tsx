import { ContactForm } from "@/components/contact-form"
import { Section } from "@/components/section"

const ContactSection = () => {
  return (
    <Section id="contact" className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        Vous souhaitez me&nbsp;
        <span className="font-semibold text-secondary">contacter</span> ?
      </h2>
      <ContactForm />
    </Section>
  )
}

export { ContactSection }
