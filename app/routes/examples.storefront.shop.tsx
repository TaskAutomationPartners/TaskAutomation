import React from "react";
import StorefrontProductCard from "../components/storefront/StorefrontProductCard"
import { products } from "~/content/examples/products";

export default function StorefrontShop() {
  return (
    <div className="bg-cer-platinum min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-cer-darkSlateGray mb-8">
          Shop Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <StorefrontProductCard key={product.uuid} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
