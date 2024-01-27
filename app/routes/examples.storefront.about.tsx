import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-cer-champagne">
  <section className="container mx-auto py-8">
    <div className="md:flex md:flex-row items-center">
      <div className="md:w-1/2 md:pr-8 text-center md:text-right">
        <h2 className="text-4xl font-semibold mt-4 md:mt-0 text-cer-ashGray">
          Our Story
        </h2>
      </div>
      <div className="md:w-1/2">
        <p className="text-justify text-cer-darkSlateGray m-2">
          Our journey began in a small village nestled in the heart of China, where centuries-old ceramic traditions met modern creativity. Founded by a passionate ceramicist, our studio draws inspiration from travels across the globe. With a dedication to craftsmanship and the pursuit of perfection, we bring unique ceramics to your home.
        </p>
      </div>
    </div>
  </section>

  <section className="bg-cer-darkSlateGray text-cer-champagne py-6">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold text-cer-ashGray">
        Ethical Sourcing
      </h2>
    </div>
  </section>

  <section className="container mx-auto py-8">
    <div className="md:flex md:flex-row">
      <div className="md:w-1/2 md:mx-2">
        <p className="text-justify text-cer-darkSlateGray m-2">
          At our core, we are committed to ethical sourcing. Our ceramics are crafted using responsibly sourced materials from various provinces of China. We establish meaningful connections with local artisans, ensuring fair working conditions and sustainable practices.
        </p>
      </div>
      <div className="md:w-1/2 md:mx-2">
        <p className="text-justify text-cer-darkSlateGray m-2">
          Through our ethical practices, we create beautiful, high-quality pieces that not only enrich your living spaces but also support the livelihoods of those who contribute to our craft. Our journey is a testament to the power of ethical and sustainable sourcing in creating art that inspires.
        </p>
      </div>
    </div>
  </section>
</div>
  );
};

export default AboutPage;
