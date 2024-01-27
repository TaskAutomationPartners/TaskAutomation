import React from 'react';
import StorefrontProductCard from './StorefrontProductCard';
import products from '../../content/examples/products'

const FeaturedProducts: React.FC = () => {
  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  const featuredProducts = sortedProducts.slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredProducts.map((product, index) => (
          <StorefrontProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
