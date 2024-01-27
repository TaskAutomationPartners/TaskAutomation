import React from "react";
import BusinessNavbar from "~/components/examples/business/BusinessNav";
import BusinessServices from "~/components/examples/business/BusinessServices";

type Props = {};

export default function BusinessServicesPage({}: Props) {
  return (
    <>
      <BusinessNavbar />
      <BusinessServices />;
    </>
  );
}
