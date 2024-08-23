import { useCart } from "@/features/cart/hooks/useCart";

export const OrderSummary: React.FC = () => {
  const { items, totalPrice } = useCart();

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t pt-2 mt-2">
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
