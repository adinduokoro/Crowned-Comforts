import React from "react";
import { PageHeader } from "../ux";
import { OurGuarantees, OurPromise, OurTenants, Sponsors } from "../components";

const Partner = ({ header }) => {
  return (
    <div>
      <PageHeader header={header} />
      <OurGuarantees />
      <Sponsors />
      <OurPromise />
      <OurTenants />
    </div>
  );
};

export default Partner;
