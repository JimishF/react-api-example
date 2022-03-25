import React from "react";
type ProductsSkeletonProps = {
  items?: number;
};
const ProductsSkeleton: React.FC<ProductsSkeletonProps> = ({ items = 5 }) => {
  const skeletonData = [...Array(items)];
  return (
    <div data-testid="products-skeleton" className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {skeletonData.map((_, index) => (
        <div key={index}>
          <div className="rounded overflow-hidden cursor-pointer transition-all">
            <div className="aspect-w-16 aspect-h-9 relative">
              <div className="bg-slate-200 animate-pulse absolute top-0 left-0 w-full h-full"></div>
            </div>
            <div className="bg-white h-[8.5rem]">
              <div className="pt-5 px-5 animate-pulse">
                <div className="bg-slate-200 h-5 my-1 rounded"></div>
                <div className="flex items-center justify-between">
                  <div className="flex-auto pr-2">
                    <p className="bg-slate-200 h-3 my-2 rounded"></p>
                    <p className="bg-slate-200 h-3 my-2 rounded"></p>
                  </div>
                  <div className="bg-slate-200 h-6 w-16 rounded"></div>
                </div>
              </div>
              <div className="flex mt-1 pb-5 px-5">
                <p className="bg-slate-200 mr-1 h-5 w-14 rounded-xl"></p>
                <p className="bg-slate-200 mr-1 h-5 w-14 rounded-xl"></p>
                <p className="bg-slate-200 mr-1 h-5 w-14 rounded-xl"></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
