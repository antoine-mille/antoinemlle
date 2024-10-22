"use client"

import { LucideGithub } from "lucide-react"
import Link from "next/link"
import { HeroContentDialog, ShinyButton } from "@/components/magicui"
import { Badge } from "@/components/badge"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { useRouter } from "@/i18n/routing"
import { Project } from "@/components/project-section"
import { StaticImageData } from "next/image"

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({
  project: {
    id,
    title,
    description,
    context,
    videoUrl,
    thumbnailSrc,
    thumbnailAlt,
    githubUrl,
    techStack,
    images,
  },
}: ProjectCardProps) => {
  const t = useTranslations("ProjectSection")
  const router = useRouter()

  const handleClick = () => router.push(`/projects/${id}`)

  return (
    <article className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-primary">{title}</h3>
          <p className="line-clamp-2 h-8 text-xs text-gray-700 sm:max-w-xs">
            {context}
          </p>
        </div>

        {githubUrl && (
          <Link href={githubUrl} target="_blank" className="pl-8">
            <LucideGithub className="size-6 text-gray-700 transition-colors duration-300 hover:text-gray-900" />
          </Link>
        )}
      </div>
      <HeroContentDialog
        {...(videoUrl
          ? {
              video: {
                src: videoUrl,
                thumbnail: {
                  src: thumbnailSrc as string,
                  alt: thumbnailAlt,
                },
              },
            }
          : images
            ? {
                image: {
                  src: thumbnailSrc as StaticImageData,
                  alt: thumbnailAlt,
                },
                className: "cursor-pointer",
              }
            : null)}
      />

      <p
        className={cn(
          "text-sm text-left text-gray-900 line-clamp-3 h-16",
          (!videoUrl || !thumbnailSrc) && "line-clamp-none h-auto"
        )}
      >
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Badge key={tech.name} className={tech.className}>
            {tech.name}
          </Badge>
        ))}
      </div>
      <ShinyButton onClick={handleClick} className="ml-auto w-fit">
        {t("cta")}
      </ShinyButton>
    </article>
  )
}

export { ProjectCard }
