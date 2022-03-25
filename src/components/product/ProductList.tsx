import React from "react";
import { useProducts } from "../../hooks/use-products";
import ErrorBox from "../common/ErrorBox";
import ProductsSkeleton from "../skeletons/ProductsSkeleton";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <ProductsSkeleton />;

  if (error)
    return (
      <ErrorBox message="Products are unavailable at the moment"></ErrorBox>
    );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
