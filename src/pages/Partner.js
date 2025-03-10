import React from "react";
import { PageHeader } from "../ux";
import { OurGuarantees, OurTenants, Sponsors } from "../components";

const Partner = ({ header }) => {
  return (
    <div>
      <PageHeader header={header} />
      <OurGuarantees />
      <Sponsors />
      <OurTenants />
    </div>
  );
};

export default Partner;
