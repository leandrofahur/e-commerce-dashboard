import { useCart } from "@/features/cart/hooks/useCart";
import { Button } from "@/common/components/ui/button";

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Your Cart ({totalItems} items)
      </h2>
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>
              ${item.price.toFixed(2)} x {item.quantity}
            </p>
          </div>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity === 1}
            >
              -
            </Button>
            <span className="mx-2">{item.quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              +
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="ml-2"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <Button className="mt-2">Proceed to Checkout</Button>
      </div>
    </div>
  );
};
