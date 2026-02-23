export const newsQuery = (start: number, end: number) => `
  *[_type == "news"] | order(publishedAt desc)[${start}...${end}] {
    _id,
    title,
    slug,
    category,
    publishedAt,
    mainImage,
    body
  }
`