import React from "react";
import BusinessAbout from "~/components/examples/business/BusinessAbout";
import BusinessCTA from "~/components/examples/business/BusinessCTA";
import BusinessFooter from "~/components/examples/business/BusinessFooter";
import BusinessHero from "~/components/examples/business/BusinessHero";
import BusinessNavbar from "~/components/examples/business/BusinessNav";

type Props = {};

export default function BusinessAboutPage({}: Props) {
  return (
    <>
      <BusinessNavbar />
      <BusinessHero />
      <BusinessAbout />
      <BusinessCTA title={"Revolutionizing design and implementation"} description={""} imageSrc="https://cdn.midjourney.com/1cbcddff-f336-443f-b3b7-eb47aa9a22d0/0_2.webp" />
      <BusinessFooter />
    </>
  );
}
