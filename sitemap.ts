import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr`,
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr/services`,
          en: `${BASE_URL}/en/services`,
        },
      },
    },
    {
      url: `${BASE_URL}/career`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${BASE_URL}/fr/career`,
          en: `${BASE_URL}/en/career`,
        },
      },
    },
  ]
}
