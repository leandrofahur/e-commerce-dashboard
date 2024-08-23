import { ProductList } from "@/features/products/components/ProductList";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/features/products/services/productService";

const ProductListPage: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return <div className="text-center py-8">Loading products...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error loading products
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      {products && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p className="text-center">No products available at the moment.</p>
      )}
    </div>
  );
};

export default ProductListPage;
