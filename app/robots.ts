import type { MetadataRoute } from 'next'

// TODO: Replace with actual custom domain once purchased
const SITE_URL = 'https://emanuel-blueboard.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
