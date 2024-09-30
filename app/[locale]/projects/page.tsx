import { HeroVideoDialog } from "@/components/magicui"
import { getProjects } from "@/components/project-section"
import { Section } from "@/components/section"
import React from "react"
import parse from "html-react-parser"
import { getTranslations } from "next-intl/server"
import { Badge } from "@/components/badge"

export default async function ProjectsPage({
  searchParams: { id },
}: {
  searchParams: { id: number }
}) {
  const projects = await getProjects()
  const t = await getTranslations({ namespace: "Project" })

  const project = projects.find((project) => project.id === +id)

  if (!project) {
    throw new Error(`Project with id ${id} not found`)
  }

  const { techStack, thumbnailSrc, videoUrl, thumbnailAlt, fullDescription } =
    project

  return (
    <main className="size-full">
      <Section withDotPattern className="flex h-full flex-col gap-6">
        <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
          {t.rich("title", {
            title: () => (
              <>
                <br />
                {project.title}
              </>
            ),
          })}
        </h1>
        {thumbnailSrc && videoUrl && (
          <HeroVideoDialog
            animationStyle="top-in-bottom-out"
            videoSrc={videoUrl}
            thumbnailSrc={thumbnailSrc}
            thumbnailAlt={thumbnailAlt}
            className="z-50 mx-auto w-full max-w-lg"
          />
        )}
        <div className="w-full space-y-3">
          <h2 className="w-full rounded-md bg-gray-100/90 py-2 pl-3 text-base font-semibold text-primary sm:text-lg">
            {t("contextTitle")}
          </h2>
          <p className="text-left text-sm text-gray-700 sm:text-base lg:text-lg">
            {project.context}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech.name} className={tech.className}>
              {tech.name}
            </Badge>
          ))}
        </div>
        <div className="w-full space-y-3">
          <h2 className="w-full rounded-md bg-gray-100/90 py-2 pl-3 text-base font-semibold text-primary sm:text-lg">
            {t("descriptionTitle")}
          </h2>
          <p className="text-left text-sm text-gray-700 sm:text-base lg:text-lg">
            {parse(
              fullDescription
                .replace(/%/g, "<br /> <br />")
                .replace(
                  /(\S+)(:link=)(\S+)/g,
                  "<a href='$3' className='text-secondary font-medium duration-300 transition-colors hover:text-secondary/70' target='_blank'>$1</a>"
                )
            )}
          </p>
        </div>
      </Section>
    </main>
  )
}
