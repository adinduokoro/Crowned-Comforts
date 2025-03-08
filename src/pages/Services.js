import React from "react";
import { PageHeader } from "../ux";
import { MoreOffer, OtherOffer } from "../components";

const Services = ({ header }) => {
  return (
    <div>
      <PageHeader header={header} />
      <MoreOffer />
      <OtherOffer />
    </div>
  );
};

export default Services;
