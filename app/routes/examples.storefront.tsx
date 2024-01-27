import { Outlet } from "@remix-run/react";
import React from "react";
import StorefrontNavbar from "~/components/examples/storefront/StorefrontNav";

type Props = {};

export default function Storefront({}: Props) {
  return (
    <div>
      <StorefrontNavbar />
      <Outlet />
    </div>
  );
}
