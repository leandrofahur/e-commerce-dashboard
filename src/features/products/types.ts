import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  imageUrl: z.string().url(),
  category: z.string(),
  stock: z.number(),
});

export type Product = z.infer<typeof ProductSchema>;
