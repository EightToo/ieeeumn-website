import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const companies = defineCollection({
  loader: file("./content/companies/index.toml"),
  schema: ({ image }) => z.object({
    tier: z.enum(["bronze", "silver", "gold", "platinum"]),
    icon: image(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./content/projects" }),
  // schema: z.object({
  //   // TODO
  // }),
})

export const collections = {
  companies,
  projects,
};
