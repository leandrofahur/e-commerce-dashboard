import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { submitOrder as submitOrderService } from "@/features/checkout/services/checkoutService";
import { useCart } from "@/features/cart/hooks/useCart";
import { CheckoutFormData } from "@/features/checkout/types";

export const useCheckout = () => {
  const { items, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: submitOrderService,
    onMutate: () => {
      setIsSubmitting(true);
    },
    onSuccess: () => {
      clearCart();
      setIsSubmitting(false);
    },
    onError: (error) => {
      setIsSubmitting(false);
      // Handle the error here, e.g., show an error message
      console.error("Order submission failed:", error);
    },
  });

  const submitOrder = (shippingInfo: CheckoutFormData) => {
    mutation.mutate({ items, shippingInfo });
  };

  return {
    submitOrder,
    isSubmitting,
    isError: mutation.isError,
    error: mutation.error,
  };
};
