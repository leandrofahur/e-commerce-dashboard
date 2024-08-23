import { z } from "zod";
import { Product } from "@/features/products/types";

export const CheckoutFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "Valid zip code is required"),
});

export type CheckoutFormData = z.infer<typeof CheckoutFormSchema>;

export interface OrderItem extends Product {
  quantity: number;
}

export interface OrderData {
  items: OrderItem[];
  shippingInfo: CheckoutFormData;
}
