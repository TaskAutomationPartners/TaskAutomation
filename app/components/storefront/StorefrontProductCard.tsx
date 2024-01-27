import { useNavigate } from '@remix-run/react';
import React from 'react';
import type { Product } from '../../content/examples/products';
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <div className="relative bg-cer-champagne rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-md" onClick={() => navigate(`/examples/storefront/product/${product.uuid}`)}>
      <div className="absolute top-2 right-2 bg-cer-darkSlateGray text-white rounded-full p-2">
        {product.rating} <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 4.414V15a1 1 0 11-2 0V4.414L2.293 7.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0L10 5.586L12.293 2.293z" clipRule="evenodd" /></svg>
      </div>
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-cer-ashGray">{product.name}</h2>
        <p className="text-cer-darkSlateGray">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-2xl font-bold text-cer-feldgrau">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

