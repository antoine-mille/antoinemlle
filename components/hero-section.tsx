import { ArrowDownButton } from "@/components/arrow-down-button"
import dynamic from "next/dynamic"
import { Section } from "./section"

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
  return (
    <Section className="flex flex-col items-center" withDotPattern>
      <div className="space-y-3">
        <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
          Antoine Mille, <br /> développeur web fullstack !
        </h1>
        <p className="text-center text-gray-600 lg:text-lg">
          Bienvenue sur mon portfolio, vous trouverez ici &nbsp;
          <span className="font-medium text-secondary">mes projets</span> et
          &nbsp;
          <span className="font-medium text-secondary">mes expériences</span>.
        </p>
      </div>
      <div className="relative mt-12">
        <h2 className="text-center text-lg font-medium text-primary sm:text-xl lg:text-2xl">
          Mes technologies quotidiennes
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
