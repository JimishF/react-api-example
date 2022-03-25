import React from "react";
import ProductList from "../components/product/ProductList";

const ProductsPage: React.FC = () => {
  return (
    <div className="w-full space-y-8 p-10 sm:px-6 lg:px-8">
      <div className="text-2xl text-white font-bold uppercase">Products</div>

      <ProductList />
    </div>
  );
};

export default ProductsPage;
