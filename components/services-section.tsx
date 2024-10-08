import Image from "next/image"
import { Section } from "@/components/section"

import designImage from "@/public/images/ui-ux-design.svg"
import webDevelopmentImage from "@/public/images/web-development.svg"
import { getTranslations } from "next-intl/server"

async function getServices() {
  const t = await getTranslations({ namespace: "ServiceCard" })
  return [
    {
      title: t("WebDevelopment.title"),
      description: t("WebDevelopment.description"),
      imageUrl: webDevelopmentImage,
    },
    {
      title: t("Design.title"),
      description: t("Design.description"),
      imageUrl: designImage,
    },
  ]
}

const ServicesSection = async () => {
  const t = await getTranslations({ namespace: "ServiceSection" })
  const services = await getServices()

  return (
    <Section withDotPattern className="flex flex-col gap-6">
      <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
        {t.rich("title", {
          br: () => <br />,
        })}
      </h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col items-center gap-2">
            <Image
              src={service.imageUrl}
              alt={t("imageAlt", { service: service.title })}
              width={208}
              height={208}
              className="size-52 object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
              {service.title}
            </h2>
            <p className="max-w-sm text-center text-sm text-gray-500 md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { ServicesSection }
