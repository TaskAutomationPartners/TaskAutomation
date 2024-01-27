import React from "react";

const testimonials = [
  {
    name: "Emily Johnson",
    content:
      "Working with this company has been an incredible experience. They took our vision and turned it into a reality with exceptional attention to detail. We couldn't be happier with the final result.",
  },
  {
    name: "David Smith",
    content:
      "I highly recommend this team for any construction project. Their professionalism and commitment to quality are unmatched. Our project was completed ahead of schedule and exceeded our expectations.",
  },
  {
    name: "Sarah Martinez",
    content:
      "From start to finish, the entire process was seamless. The team communicated effectively, and every aspect of our project was well-planned and executed. We love our new space!",
  },
  {
    name: "Michael Brown",
    content:
      "I was impressed by the expertise and skill of this company. They transformed our old building into a modern masterpiece. The attention to detail and craftsmanship are truly exceptional.",
  },
  {
    name: "Olivia Davis",
    content:
      "Our project was a complex one, and this team handled it with ease. They were responsive to our needs and provided creative solutions to unexpected challenges. We are thrilled with the results.",
  },
  {
    name: "Daniel Wilson",
    content:
      "I can't thank this company enough for their outstanding work. They delivered on every promise and created a space that exceeded our expectations. I would choose them again without hesitation.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-gradient-to-tr from-con-cadetGray to-con-white">
      <section className=" py-8 px-4 text-con-richBlack bg-con-white text-right shadow-lg">
        <h1 className="text-4xl font-semibold">Client Testimonials</h1>
        <p className="mt-4 text-lg">What our clients say about us</p>
      </section>
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-con-richBlack rounded-md shadow-sm relative p-6"
            >
              <p className="text-con-richBlack">"{testimonial.content}"</p>
              <p className="text-con-richBlack">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
