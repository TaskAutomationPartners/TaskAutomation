import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
};

const serviceCardContent = [
  {
    title: "Innovative Solutions",
    description:
      "We offer innovative solutions tailored to your unique business needs. Our team of experts is constantly pushing the boundaries of technology to provide cutting-edge solutions that keep you ahead of the competition.",
  },
  {
    title: "Cutting Edge Design",
    description:
      "Our cutting-edge design process combines creativity and functionality to deliver exceptional results. We create visually stunning designs that leave a lasting impression while ensuring seamless user experiences.",
  },
  {
    title: "Strategic Planning",
    description:
      "Our strategic planning services help you chart a clear path to success. We work closely with you to develop customized strategies that align with your goals and drive sustainable growth.",
  },
];

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2  text-con-richBlack">{title}</h3>
      <p className=" text-con-richBlack">{description}</p>
    </div>
  );
}

type BusinessServicesMiddleProps = {
  header: string;
};

export default function BusinessServicesMiddle({
  header,
}: BusinessServicesMiddleProps) {
  return (
    <section className="bg-gray-100 py-8 ">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold  text-con-richBlack text-right">{header}</h2>
        <div className="flex flex-wrap -mx-4  bg-con-pumpkin rounded-sm shadow-con-blue shadow-lg">
          {serviceCardContent.map((service, index) => (
            <div
              className={`w-full md:w-1/2 px-4 ${
                index === 0 ? "md:w-full" : ""
              }`}
              key={index}
            >
              {index === 0 ? (
                <div className="p-6 mb-6">
                  <p className="text-right text-con-richBlack">{service.description}</p>
                </div>
              ) : (
                <ServiceCard {...service} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
