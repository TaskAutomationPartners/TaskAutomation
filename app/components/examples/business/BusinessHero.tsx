import React from "react";

export default function BusinessHero() {
  return (
    <section className="relative">
    <div className="bg-cover bg-center h-96 md:h-heroImage md:relative" style={{ backgroundImage: "url('https://cdn.midjourney.com/8e617ce7-865e-4a28-b7bf-ea05f95a31be/0_0_2048_N.webp?method=width&qst=6')" }}>
      <div className="bg-black bg-opacity-40 h-full w-full md:absolute top-0 left-0"></div>
    </div>
    {/* Softly Rounded Card */}
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-1/2 md:max-w-md p-8">
      <div className="bg-white rounded-lg p-6 shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Your Trusted Partner in Modern Construction
        </h1>
        <p className="text-gray-600">
          We leverage in-house architects and engineers to create modern
          residential and commercial buildings that exceed expectations.
        </p>
      </div>
    </div>
  </section>
  );
}
