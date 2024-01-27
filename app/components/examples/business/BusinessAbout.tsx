import React from "react";

export default function BusinessAbout() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Card (Left) */}
          <div className="md:order-1">
            {/* Image Card */}
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src="https://cdn.midjourney.com/c8fe42b6-b730-4964-b4d9-faec239edd7d/0_0.webp"
                alt="Business About Image"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="md:order-2">
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <h2 className="text-md font-semibold text-gray-800 mb-2">
                About Our Company
              </h2>
              <p className="text-xs text-gray-600">
                We are a modern construction firm that brings your dream
                projects to life. With a team of in-house architects and
                engineers, we specialize in designing and building both
                residential and commercial spaces.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <h2 className="text-md font-semibold text-gray-800 mb-2">
                Our Approach
              </h2>
              <p className="text-xs text-gray-600">
                We believe in delivering exceptional results through a
                collaborative and innovative approach. Our team is dedicated to
                understanding your unique needs and providing tailored
                solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-md font-semibold text-gray-800 mb-2">
                Sustainability
              </h2>
              <p className="text-xs text-gray-600">
                Sustainability is at the core of our projects. We prioritize
                eco-friendly materials and practices to create buildings that
                are not only stunning but also environmentally responsible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
