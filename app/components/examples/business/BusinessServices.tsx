import React from "react";
import BusinessServicesBanner from "./BusinessServicesBanner";
import BusinessServicesMiddle from "./BusinessServiceMiddle";
import BusinessServiceThree from "./BusinessServicesThree";

export default function BusinessServices() {
  return (
    <div className="bg-con-white p-8">
        <BusinessServicesBanner
            imageSrc="https://cdn.midjourney.com/d762abe4-96c4-49b9-a61b-8372e3ab795f/0_1.webp"
            title="Branding"
            description="We specialize in creating innovative solutions that revolutionize industries and redefine possibilities. Our team of experts is dedicated to pushing the boundaries of technology and design, ensuring that our clients stay ahead in today's fast-paced world."
        />
   <BusinessServicesMiddle header="Form and Function."/>
   <BusinessServiceThree />
    </div>
  );
}
