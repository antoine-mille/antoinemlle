import React from "react"
import { ProjectCard } from "@/components/project-card"
import { Section } from "@/components/section"
import { getTranslations } from "next-intl/server"
import { HeroContentDialog } from "@/components/magicui"
import { Badge } from "@/components/badge"
import parse from "html-react-parser"
import { LinkIcon } from "@/components/link-icon"
import { GithubIcon } from "lucide-react"
import { StaticImageData } from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui"

import thumbnailGardeMangerApp from "@/public/images/gardemangerapp/thumbnail-gardemangerapp.png"
import signinGardeMangerApp from "@/public/images/gardemangerapp/signin.png"
import onboardingGardeMangerApp from "@/public/images/gardemangerapp/onboarding.png"
import homeGardeMangerApp from "@/public/images/gardemangerapp/home.png"
import validatePurchasesGardeMangerApp from "@/public/images/gardemangerapp/validate-purchases.png"
import frigoGardeMangerApp from "@/public/images/gardemangerapp/frigo.png"
import frigoClickProductGardeMangerApp from "@/public/images/gardemangerapp/frigo-click-product.png"

export type Project = {
  id: number
  title: string
  description: string
  fullDescription: string
  context: string
  videoUrl?: string
  thumbnailSrc?: string | StaticImageData
  thumbnailAlt?: string
  githubUrl?: string
  images?: StaticImageData[]
  techStack: {
    name: string
    className: string
  }[]
}

export async function getProjects(): Promise<Project[]> {
  const t = await getTranslations({ namespace: "ProjectSection" })
  return [
    {
      id: 1,
      title: t("Luxeshop.title"),
      description: t("Luxeshop.description"),
      fullDescription: t("Luxeshop.fullDescription"),
      context: t("Luxeshop.context"),
      videoUrl: "https://www.youtube.com/embed/JqCkuJsMvKA?si=P6EzkUN259rrh8RO",
      thumbnailSrc: "https://img.youtube.com/vi/JqCkuJsMvKA/maxresdefault.jpg",
      thumbnailAlt: t.rich("thumbnailAlt", {
        project: "Luxeshop",
      }) as string,
      githubUrl: "https://github.com/antoine-mille/luxeshop",
      techStack: [
        {
          name: "Next.js",
          className: "bg-gray-900 text-red-100",
        },
        {
          name: "Tailwind CSS",
          className: "bg-[#1ABECC] text-white",
        },
        {
          name: "Stripe",
          className: "bg-[#6772E5] text-white",
        },
        {
          name: "PostgreSQL",
          className: "bg-[#336791] text-white",
        },
        {
          name: "Prisma",
          className: "bg-[#2D3748] text-white",
        },
        {
          name: "NextAuth",
          className: "bg-[#F77300] text-white",
        },
      ],
    },
    {
      id: 2,
      title: t("161.title"),
      description: t("161.description"),
      fullDescription: t("161.fullDescription"),
      context: t("161.context"),
      thumbnailAlt: t.rich("thumbnailAlt", {
        project: "161",
      }) as string,
      videoUrl: "https://www.youtube.com/embed/pL5-nv7JuvU?si=7qLgv3noR7P-S0Gl",
      thumbnailSrc: "https://img.youtube.com/vi/pL5-nv7JuvU/maxresdefault.jpg",
      techStack: [
        {
          name: "React.js",
          className: "bg-[#03D5F7] text-white",
        },
        {
          name: "Tailwind CSS",
          className: "bg-[#1ABECC] text-white",
        },
        {
          name: "OpenStreetView API",
          className: "bg-[#7EBC6F] text-white",
        },
      ],
    },
    {
      id: 3,
      title: t("GardeMangerAPP.title"),
      description: t("GardeMangerAPP.description"),
      fullDescription: t("GardeMangerAPP.fullDescription"),
      context: t("GardeMangerAPP.context"),
      thumbnailAlt: t.rich("thumbnailAlt", {
        project: "GardeManger App",
      }) as string,
      thumbnailSrc: thumbnailGardeMangerApp,
      images: [
        onboardingGardeMangerApp,
        signinGardeMangerApp,
        homeGardeMangerApp,
        frigoGardeMangerApp,
        frigoClickProductGardeMangerApp,
        validatePurchasesGardeMangerApp,
      ],
      techStack: [
        {
          name: "Figma",
          className: "bg-[#F24E1E] text-white",
        },
      ],
    },
    {
      id: 4,
      title: t("MusicPlayer.title"),
      description: t("MusicPlayer.description"),
      fullDescription: t("MusicPlayer.fullDescription"),
      context: t("MusicPlayer.context"),
      thumbnailAlt: t.rich("thumbnailAlt", {
        project: "Music Player",
      }) as string,
      githubUrl: "https://github.com/antoine-mille/music-player-app",
      techStack: [
        {
          name: "Next.js",
          className: "bg-gray-900 text-white",
        },
        {
          name: "Tailwind CSS",
          className: "bg-[#1ABECC] text-white",
        },
        {
          name: "Spotify API",
          className: "bg-[#1DB954] text-white",
        },
        {
          name: "NextAuth",
          className: "bg-[#F77300] text-white",
        },
      ],
    },
  ]
}

const SmallProjectSection = async () => {
  const t = await getTranslations({ namespace: "ProjectSection" })

  const projects = await getProjects()
  return (
    <Section id="projects" className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        {t.rich("title", {
          span: (chunks) => (
            <span className="font-semibold text-secondary">{chunks}</span>
          ),
        })}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

type ProjectSectionProps = {
  project: Project
}

const ProjectSection = async ({
  project: {
    techStack,
    thumbnailSrc,
    videoUrl,
    thumbnailAlt,
    fullDescription,
    title,
    context,
    githubUrl,
    images,
  },
}: ProjectSectionProps) => {
  const t = await getTranslations({ namespace: "Project" })

  return (
    <Section withDotPattern className="flex h-full flex-col gap-6">
      <h1 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
        {t.rich("title", {
          title: () => (
            <>
              <br />
              {title}
            </>
          ),
        })}
      </h1>
      {videoUrl && (
        <HeroContentDialog
          video={{
            src: videoUrl,
            thumbnail: {
              src: thumbnailSrc as string,
              alt: thumbnailAlt,
            },
          }}
          className="z-50 mx-auto w-full max-w-lg"
        />
      )}
      {images && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-auto w-3/4"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <HeroContentDialog
                  image={{
                    src: image,
                    alt: thumbnailAlt,
                  }}
                  className="z-50 cursor-pointer select-none"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-white hover:bg-secondary hover:text-secondary-foreground" />
          <CarouselNext className="bg-primary text-white hover:bg-secondary hover:text-secondary-foreground" />
        </Carousel>
      )}
      <div className="w-full space-y-3">
        <div className="flex justify-between rounded-md bg-gray-100/90 px-3 py-2">
          <h2 className="text-base font-semibold text-primary sm:text-lg">
            {t("contextTitle")}
          </h2>
          {githubUrl && (
            <LinkIcon href={githubUrl}>
              <GithubIcon />
            </LinkIcon>
          )}
        </div>

        <p className="text-left text-sm text-gray-700 sm:text-base lg:text-lg">
          {context}
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
  )
}

export { ProjectSection, SmallProjectSection }
