import { Link } from "@remix-run/react";
import React from "react";

type Props = {};

export default function ExampleBanner({}: Props) {
  return (
    <div className="w-full flex bg-white justify-center p-8">
      <header className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center text-black">
          View some example websites
        </h1>
        <Link to="/examples">
          <button className="btn btn-primary rounded-md mt-2 text-white">View</button>
        </Link>
      </header>
    </div>
  );
}
