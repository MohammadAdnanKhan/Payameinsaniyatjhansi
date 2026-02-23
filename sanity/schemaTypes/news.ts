import { defineType, defineField } from "sanity";

export default defineType({
  name: "news",
  title: "News Updates",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Daily Update", value: "daily" },
          { title: "Food Distribution", value: "food" },
          { title: "Clothes Distribution", value: "clothes" },
          { title: "Medical Camps", value: "medical" },
          { title: "Employment Generation", value: "employment" },
          { title: "Environmental Activism", value: "environment" },
          { title: "Social Activism", value: "social" },
          { title: "Crowdsourcing", value: "crowdsourcing" },
          { title: "Others", value: "others" }
        ],
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "excerpt",
      title: "Short Preview Text",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "body",
      title: "Full Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});