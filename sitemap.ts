import type { MetadataRoute } from "next"

const WEBSITE_URL = "https://yourwebsite.com" // IMPORTANT: Replace with your actual website URL

export function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: WEBSITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${WEBSITE_URL}/services`, // Assuming a services page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${WEBSITE_URL}/about`, // Assuming an about page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${WEBSITE_URL}/contact`, // Assuming a contact page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Add more URLs for other important pages like specific service pages, blog posts, etc.
    // Example:
    // {
    //   url: `${WEBSITE_URL}/services/back-pain-physiotherapy`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.9,
    // },
  ]
}
