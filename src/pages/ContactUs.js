import React from "react";
import { PageHeader } from "../ux";
import { Contact, Faq, MessageUs } from "../components";

const ContactUs = ({header}) => {
  return (
    <div>
      <PageHeader header={header} />
      <MessageUs />
      <Faq />
      <Contact />
    </div>
  );
};

export default ContactUs;
