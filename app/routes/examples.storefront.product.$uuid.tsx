import React from "react";
import { useParams } from "react-router-dom";
import { products } from "~/content/examples/products";

export default function ProductPage() {
  const { uuid } = useParams<{ uuid: string }>();
  const product = products.find((p) => p.uuid === uuid);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-cer-platinum min-h-screen">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-cer-darkSlateGray mb-1">
              {product.name}
            </h1>
            <p className="text-cer-ashGray text-lg mb-4">
              {product.description}
            </p>
            
            <div className="flex justify-between items-center mb-4">
              <p className="text-cer-darkSlateGray text-2xl font-bold">
                ${product.price}
              </p>
              <button className="bg-cer-feldgrau text-cer-platinum px-4 py-2 rounded-full hover:bg-cer-ashGray hover:text-white transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>

            <div className="mt-8 card">
              <h2 className="text-xl font-semibold text-cer-darkSlateGray mb-4">
                Description
              </h2>
              <p className="text-cer-darkSlateGray">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
