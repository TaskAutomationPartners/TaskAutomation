import React from "react";


export default function BusinessLanding() {
  return (
    <div>
      <header className="bg-blue-300 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to Our Business
          </h1>
          <p className="text-xl text-white">
            Providing Quality Construction Services
          </p>
        </div>
      </header>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            bibendum feugiat magna id efficitur. Sed euismod augue a odio
            tincidunt, vel fermentum elit scelerisque. Nulla vitae libero
            eleifend, venenatis ex id, varius urna. Phasellus auctor libero vel
            ipsum viverra, ut laoreet odio posuere.
          </p>
        </div>
      </section>
    </div>
  );
}
