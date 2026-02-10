import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sort: z.number().optional(),
  }),
});

export const collections = {
  pages,
};