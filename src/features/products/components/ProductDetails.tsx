import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/productService";
import { useCart } from "@/features/cart/hooks/useCart";
import { Button } from "@/common/components/ui/button";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(Number(id)),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product details</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full mb-4 rounded-lg"
      />
      <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
      <p className="mb-4">{product.description}</p>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </div>
  );
};
