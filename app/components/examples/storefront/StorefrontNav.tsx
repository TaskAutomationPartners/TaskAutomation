import React from 'react';
import { Link } from '@remix-run/react';

const StorefrontNavbar = () => {
  return (
    <div>
      <Link to="/examples/storefront">
        <section className="bg-[url('https://cdn.midjourney.com/5f44a4aa-3d3a-42bc-8361-379578011a82/0_0.webp')] bg-cover bg-center py-8 text-white text-center">
          <h1 className="text-4xl font-semibold text-slate-800">Ceramics Online Shop</h1>
          <p className="mt-4 text-lg">Discover Beautiful Ceramics</p>
        </section>
      </Link>

      <nav className="bg-ashGray p-4">
        <ul className="flex justify-center space-x-6">
          <Link to="/examples/storefront" className="text-champagne hover:text-feldgrau">Home</Link>
          <Link to="/examples/storefront/shop" className="text-champagne hover:text-feldgrau">Shop</Link>
          <Link to="/examples/storefront/about" className="text-champagne hover:text-feldgrau">About</Link>
        </ul>
      </nav>
    </div>
  );
};

export default StorefrontNavbar;
