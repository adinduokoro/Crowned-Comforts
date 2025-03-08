import React from "react";
import { PageHeader } from "../ux";
import { Contact } from "../components";

const ContactUs = ({header}) => {
  return (
    <div>
      <PageHeader header={header} />
      <Contact />
    </div>
  );
};

export default ContactUs;
