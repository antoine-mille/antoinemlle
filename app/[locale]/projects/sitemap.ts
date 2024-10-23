import { BASE_URL } from "@/lib/constants"
import type { MetadataRoute } from "next"

export async function generateSitemaps() {
  return Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
  }))
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/projects/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr/projects/${id}`,
          en: `${BASE_URL}/en/projects/${id}`,
        },
      },
    },
  ]
}
