import React from "react";

export default function BusinessServiceThree() {
  return (
    <section className="bg-con-eggshell p-8 shadow-con-blue  shadow-sm">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-con-richBlack mb-4">Our Construction Services</h2>

        <div className="">
          <div className="w-full px-4 mb-4">
            <div className="bg-con-charcoal text-con-eggshell rounded-lg  p-6">
              <h3 className="text-2xl font-semibold mb-4 text-con-white">Construction Techniques</h3>
              <p className="text-con-white">
                Explore innovative construction techniques with us. We incorporate the latest methods and technologies to ensure efficiency, sustainability, and top-notch quality in every project we undertake.
              </p>
            </div>
          </div>
          <div className="w-full  px-4 mt-6 md:mt-0">
            <div className="bg-con-platinum text-con-darkSlateGray rounded-lg  p-6">
              <h3 className="text-2xl font-semibold mb-4 text-con-richBlack">Project Management</h3>
              <p className="text-con-richBlack">
                Our project management expertise is your key to success. We offer comprehensive project management services to ensure seamless execution, timely delivery, and cost-effectiveness in all your construction endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
