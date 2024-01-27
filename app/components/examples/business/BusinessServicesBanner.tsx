import React from "react";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function CustomBusinessCTA({ title, description, imageSrc }: Props) {
  return (
    <section className="bg-con-white py-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg md:flex md:items-center">

          <div className="md:w-1/2 p-6 md:p-8 relative md:order-1">
            <h2 className="text-2xl mb-2 font-semibold text-con-charcoal">{title}</h2>
            <p className="text-con-charcoal mt-4 md:mt-0">{description}</p>
          </div>

          <div className="md:w-1/2 relative md:order-2">
            <div className="bg-con-white rounded-lg shadow-lg overflow-hidden aspect-w-4 aspect-h-3 md:aspect-none md:p-6">
              <div className="md:block absolute inset-0 filter opacity-75">
                <img
                  src={imageSrc}
                  alt="CTA Image"
                  className="w-full h-full object-cover"
                />
              </div>

              <img
                src={imageSrc}
                alt="CTA Image"
                className="md:w-full md:h-full md:object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
