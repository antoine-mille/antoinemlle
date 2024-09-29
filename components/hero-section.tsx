import { ArrowDownButton } from "@/components/arrow-down-button"
import dynamic from "next/dynamic"
import { Section } from "./section"
import { useTranslations } from "next-intl"

const IconCloud = dynamic(
  () => import("@/components/magicui/icon-cloud").then((mod) => mod.IconCloud),
  {
    ssr: false,
  }
)

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "figma",
]

const HeroSection = () => {
  const t = useTranslations("HeroSection")

  return (
    <Section className="flex flex-col items-center" withDotPattern>
      <div className="space-y-3">
        <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
          {t.rich("title", {
            br: () => <br />,
          })}
        </h1>
        <p className="text-center text-gray-600 lg:text-lg">
          {t.rich("description", {
            span: (chunks) => (
              <span className="font-medium text-secondary">{chunks}</span>
            ),
          })}
        </p>
      </div>
      <div className="relative mt-12">
        <h2 className="text-center text-lg font-medium text-primary sm:text-xl lg:text-2xl">
          {t("subtitle")}
        </h2>
        <div className="absolute bottom-0 left-1/2 size-80 -translate-x-1/2 translate-y-[95%]">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <ArrowDownButton className="mt-[25rem]" />
    </Section>
  )
}

export { HeroSection }
