import { ProjectCard } from "@/components/project-card"
import { Section } from "@/components/section"

export const projects = [
  {
    title: "Luxeshop - E-commerce",
    description:
      "Site e-commerce, possibilité de s'inscrire, de se connecter, de rechercher les produits, de les ajouter aux favoris et de les acheter via une intégration Stripe.",
    context: "Démonstration de mes compétences en développement web.",
    videoUrl: "https://www.youtube.com/embed/JqCkuJsMvKA?si=P6EzkUN259rrh8RO",
    thumbnailSrc: "https://img.youtube.com/vi/JqCkuJsMvKA/maxresdefault.jpg",
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
    title: "Clone de l'entreprise 161",
    description:
      "Site vitrine de l'entreprise 161, présentation des services, des réalisations et intégration de la carte OpenStreetView.",
    context: "Démonstration de mes compétences en développement web.",
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
    title: "Music Player",
    description:
      "Application de lecture de musique, intégrant l'API de Spotify. Possibilité de s'authentifier via un compte Spotify. Aussi, possibilité d'écouter les musiques préférées, les playlists et les albums. On peut mettre en pause la musique, la passer, la remettre au début et changer le volume.",
    context: "Démonstration de mes compétences en développement web.",
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

const ProjectSection = () => {
  return (
    <Section id="projects" className="space-y-6">
      <h2 className="text-xl text-gray-900 sm:text-2xl">
        Mes projets&nbsp;
        <span className="font-semibold text-secondary">réalisés</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}

export { ProjectSection }
