import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductListPage from "@/pages/ProductListPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import CheckoutPage from "@/pages/CheckoutPage";
import { Cart } from "./features/cart/components/Cart";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mx-auto px-4">
          <nav className="mb-4">{/* Add navigation menu items here */}</nav>
          <Cart />
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
