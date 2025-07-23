/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "http://www.painfreerehabcenter.in",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
};
