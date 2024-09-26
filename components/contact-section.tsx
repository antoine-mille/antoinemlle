import { ContactForm } from "@/components/contact-form"

const ContactSection = () => {
  return (
    <section className="mt-12 px-4 space-y-6 md:px-12 lg:px-24">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        Vous souhaitez me&nbsp;
        <span className="text-secondary font-semibold">contacter</span> ?
      </h2>
      <ContactForm />
    </section>
  )
}

export { ContactSection }
