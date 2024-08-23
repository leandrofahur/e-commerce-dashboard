import { OrderData } from "@/features/checkout/types";

const API_URL = "http://localhost:3001/products";

export const submitOrder = async (
  orderData: OrderData
): Promise<{ orderId: string }> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit order");
  }

  return response.json();
};
