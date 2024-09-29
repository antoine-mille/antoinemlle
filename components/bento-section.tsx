import Image from "next/image"
import { BentoCard, BentoGrid } from "@/components/magicui"
import profilPic from "@/public/images/antoine.png"
import { CompassIcon, HandIcon } from "lucide-react"
import { Section } from "@/components/section"
import { getTranslations } from "next-intl/server"

async function getFeatures() {
  const t = await getTranslations({ namespace: "BentoSection" })
  return [
    {
      Icon: CompassIcon,
      name: t("Career.name"),
      description: t("Career.description"),
      href: "/career",
      cta: t("Career.cta"),
      background: (
        <Image
          src={profilPic}
          alt="Photo de profil d'Antoine Mille"
          width={128}
          height={128}
          className="absolute left-1/2 size-32 -translate-x-1/2 translate-y-10 rounded-full object-cover"
        />
      ),
      className: "row-start-1 row-end-1 col-start-1 col-end-4 sm:col-end-3",
    },
    {
      Icon: HandIcon,
      name: t("Services.name"),
      description: t("Services.description"),
      href: "/services",
      cta: t("Services.cta"),
      className:
        "row-start-2 row-end-2 sm:row-start-1 sm:row-start-1 sm:col-start-3 sm:col-end-4",
      background: undefined,
    },
  ]
}

const BentoSection = async () => {
  const features = await getFeatures()
  return (
    <Section id="discover">
      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </Section>
  )
}

export { BentoSection }
