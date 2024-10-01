import { getProjects, ProjectSection } from "@/components/project-section"
import React from "react"

export default async function ProjectsPage({
  params: { projectId },
}: {
  params: { projectId: number }
}) {
  const projects = await getProjects()

  const project = projects.find((project) => project.id === +projectId)

  if (!project) {
    throw new Error(`Project with id ${projectId} not found`)
  }

  return (
    <main className="size-full">
      <ProjectSection project={project} />
    </main>
  )
}
