import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { useCheckout } from "../hooks/useCheckout";
import { CheckoutFormData, CheckoutFormSchema } from "../types";

export const CheckoutForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormSchema),
  });
  const { submitOrder, isSubmitting } = useCheckout();

  const onSubmit = (data: CheckoutFormData) => {
    submitOrder(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register("fullName")} placeholder="Full Name" />
      {errors.fullName && (
        <p className="text-red-500">{errors.fullName.message}</p>
      )}

      <Input {...register("email")} placeholder="Email" type="email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <Input {...register("address")} placeholder="Address" />
      {errors.address && (
        <p className="text-red-500">{errors.address.message}</p>
      )}

      <Input {...register("city")} placeholder="City" />
      {errors.city && <p className="text-red-500">{errors.city.message}</p>}

      <Input {...register("zipCode")} placeholder="Zip Code" />
      {errors.zipCode && (
        <p className="text-red-500">{errors.zipCode.message}</p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Place Order"}
      </Button>
    </form>
  );
};
