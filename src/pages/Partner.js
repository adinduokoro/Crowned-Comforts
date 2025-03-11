import React from "react";
import { PageHeader } from "../ux";
import { Operations, OurGuarantees, OurPromise, OurTenants, Sponsors } from "../components";

const Partner = ({ header }) => {
  return (
    <div>
      <PageHeader header={header} />
      <OurGuarantees />
      <Sponsors />
      <OurPromise />
      <OurTenants />
      <Operations />
    </div>
  );
};

export default Partner;
