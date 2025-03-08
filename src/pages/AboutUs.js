import React from "react";
import { PageHeader } from "../ux";
import { Cta, Mission } from "../components";

const AboutUs = ({ header }) => {
  return (
    <div>
      <PageHeader header={header} />
      <Mission />
      <Cta />
    </div>
  );
};

export default AboutUs;
