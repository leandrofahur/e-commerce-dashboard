import { CheckoutForm } from "@/features/checkout/components/Checkoutform";
import { OrderSummary } from "@/features/checkout/components/OrderSummary";
import { useCart } from "@/features/cart/hooks/useCart";
import { Button } from "@/common/components/ui/button";
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="mb-4">
          Add some items to your cart before proceeding to checkout.
        </p>
        <Button onClick={() => navigate("/")}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <CheckoutForm />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
