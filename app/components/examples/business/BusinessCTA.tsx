import React from "react";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
};

export default function BusinessCTA({ title, description, imageSrc }: Props) {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg md:flex md:items-center">

          <div className="md:w-1/2 p-6 md:p-8 relative">
            <h2 className="text-2xl font-semibold text-black">{title}</h2>
            <p className="text-gray-600 mt-4 md:mt-0">{description}</p>
          </div>

    
          <div className="md:w-1/2 relative">
     
            <div className="bg-white rounded-lg shadow-lg overflow-hidden aspect-w-4 aspect-h-3 md:aspect-none md:p-6">

              <div className="md:hidden absolute inset-0 filter blur-md opacity-75">
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
