import React from "react";
import { PageHeader } from "../ux";
import { BookNow, MoreOffer, OtherOffer } from "../components";

const Services = ({ header }) => {
  return (
    <div>
      <PageHeader header={header} />
      <MoreOffer />
      <OtherOffer />
      <BookNow />
    </div>
  );
};

export default Services;
