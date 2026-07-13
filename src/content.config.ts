import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
});

const blogFr = defineCollection({
    loader: glob({ base: "./content/blog/fr/", pattern: "**/*.{md,mdx}" }),
    schema: blogSchema,
});

const blogEn = defineCollection({
    loader: glob({ base: "./content/blog/en/", pattern: "**/*.{md,mdx}" }),
    schema: blogSchema,
});

export const collections = { blogFr, blogEn };
export type Blog = z.infer<typeof blogSchema>;
