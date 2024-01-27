import { Outlet } from "@remix-run/react";
import React from "react";
import BusinessLanding from "~/components/examples/business/BusinessLanding";
import BusinessNavbar from "~/components/examples/business/BusinessNav";

type Props = {};

export default function Business({}: Props) {
  return (
    <>
      <BusinessNavbar />
      <Outlet />
    </>
  );
}
