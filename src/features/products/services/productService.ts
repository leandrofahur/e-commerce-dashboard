import { Product } from "@/features/products/types";
// import { z } from "zod";

const API_URL = "http://localhost:3001/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data; // The response is already an array, so we don't need to access a specific property
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};
