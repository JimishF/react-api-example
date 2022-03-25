import React from "react";
import { Product } from "../../types/product";
import Chip from "../common/Chip";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  const { title, description, images, price, variants, tags } = product;

  return (
    <div data-testid='product-card' className="rounded overflow-hidden cursor-pointer transition-all">
      <div className="aspect-w-16 aspect-h-9 relative">
        <div className="bg-slate-200 animate-pulse absolute top-0 left-0 w-full h-full"></div>
        <img
          src={images[0]}
          className="w-full object-center object-cover"
          alt={title}
        />
        {variants.length > 0 && (
          <div data-testid="product-total-variants" className="flex w-full absolute justify-end items-end pb-1 pr-1">
            <Chip
              className="bg-blue-500 text-white"
            >
              {variants.length} variants
            </Chip>
          </div>
        )}
      </div>

      <div className="bg-white h-[8.5rem]">
        <div className="py-5 px-5">
          <span
            className="font-bold text-gray-800 text-lg line-clamp-1"
            data-testid="product-title"
          >
            {title}
          </span>
          <div className="flex items-center justify-between">
            <div
              className={`text-sm text-gray-600 font-light pr-2 ${
                tags.length > 0 ? "line-clamp-2" : "line-clamp-3"
              }`}
              data-testid="product-description"
            >
              {description}
            </div>
            <div className="text-xl text-red-600 font-bold">${price}</div>
          </div>

          {tags.length > 0 && (
            <div className="flex mt-2" data-testid="product-tags">
              {tags.slice(0, 3).map((tag, index) => (
                <Chip key={index}> {tag} </Chip>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
