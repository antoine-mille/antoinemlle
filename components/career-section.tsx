import { Section } from "@/components/section"
import { TextRevealByWord } from "@/components/ui"
import { useTranslations } from "next-intl"

const CareerSection = () => {
  const t = useTranslations("CareerSection")
  return (
    <Section withDotPattern>
      <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
        {t.rich("title", {
          br: () => <br />,
        })}
      </h1>
      <TextRevealByWord text={t("TextReveal.1")} />

      <TextRevealByWord text={t("TextReveal.2")} />
    </Section>
  )
}

export { CareerSection }
