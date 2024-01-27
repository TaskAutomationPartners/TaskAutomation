import React from "react";
import BusinessNavbar from "~/components/examples/business/BusinessNav";
import BusinessTestimonials from "~/components/examples/business/BusinessTestimonials";

type Props = {};

export default function BusinessTestimonialsPage({}: Props) {
  return (
    <>
      <BusinessNavbar />
      <BusinessTestimonials />;
    </>
  );
}
