import React from "react";
import { Link } from "react-router-dom";

export default function BusinessNavbar() {
  return (
    <nav className="bg-con-blue p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/examples/business" className="text-con-white font-bold text-lg">
          Rourke Design and Construction
        </Link>
        <div className="space-x-4">
          <Link
            to="/examples/business/about"
            className="text-con-white hover:text-con-pumpkin transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/examples/business/services"
            className="text-con-white hover:text-con-pumpkin transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/examples/business/testimonials"
            className="text-con-white hover:text-con-pumpkin transition duration-300"
          >
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
}
