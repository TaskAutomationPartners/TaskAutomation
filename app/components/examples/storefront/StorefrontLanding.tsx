import React from "react";
import FeaturedProducts from "~/components/storefront/StorefrontFeatured";

export default function StorefrontAbout() {
  return (
    <div className="bg-cer-platinum">
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2 text-cer-darkSlateGray">Welcome to Our Ceramic Wonderland</h2>
          <p className="text-cer-darkSlateGray">
            Immerse yourself in the world of fine ceramics at Smith's Ceramics. Our passion for creating exquisite ceramic art has led us on a remarkable journey that we're excited to share with you. With a dedication to craftsmanship, quality, and sustainability, we offer a curated selection of ceramics that will elevate your living spaces.
          </p>
         
        </div>
      </section>

      <section>
        <div className="container mx-auto text-center">
          <h2 className="text-2xl text-cer-darkSlateGray font-semibold mb-8">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      <section className="bg-cer-platinum py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8 text-cer-darkSlateGray">Customer Reviews</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-cer-darkSlateGray">
                "I absolutely love the ceramics from Smith's Ceramics. They bring beauty and sophistication to my home. The craftsmanship is exceptional!"
              </p>
              <p className="text-cer-darkSlateGray mt-4">- Happy Customer 1</p>
            </div>

            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-cer-darkSlateGray">
                "Ceramics By Smith's Ceramics adds a touch of elegance to every occasion. Their attention to detail and quality are unmatched."
              </p>
              <p className="text-cer-darkSlateGray mt-4">- Satisfied Shopper</p>
            </div>


            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-cer-darkSlateGray">
                "I'm a loyal fan of Smith's Ceramics. Their ceramics have become a staple in my home. The designs are timeless and versatile."
              </p>
              <p className="text-cer-darkSlateGray mt-4">- Ceramics Enthusiast</p>
            </div>
          </div>
        </div>
      </section>    </div>
  );
}
