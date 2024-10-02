import { getProjects, ProjectSection } from "@/components/project-section"
import { notFound } from "next/navigation"
import React from "react"

export default async function ProjectsPage({
  params: { projectId },
}: {
  params: { projectId: number }
}) {
  const projects = await getProjects()

  const project = projects.find((project) => project.id === +projectId)

  if (!project) {
    notFound()
  }

  return (
    <main className="size-full pb-12">
      <ProjectSection project={project} />
    </main>
  )
}
