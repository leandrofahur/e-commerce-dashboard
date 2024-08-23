import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { Button } from "@/common/components/ui/button";
import { Product } from "@/features/products/types";
import { useCart } from "@/features/cart/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};
