import React from "react";
import AboutCard from "../cards/AboutCard"; // Adjust the import path accordingly
import aboutContent from "../../content/about/aboutCards.json"; // Adjust the import path according to your file structure

type Props = {};

export default function About({}: Props) {
  return (
    <div id="about" className="bg-gradient-to-br from-slate-300 to-cyan-700 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-100 pb-8">
              About Us
            </h2>
            <p className="text-base-100">
              At the intersection of innovation and excellence, we strive to
              elevate digital experiences and transform the way businesses
              operate in the digital landscape. Driven by a passion for
              technology, we are dedicated to delivering solutions that foster
              growth and create lasting value.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-4 p-8">
            {aboutContent.map((content) => (
              <AboutCard
                key={content.title}
                title={content.title}
                description={content.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
