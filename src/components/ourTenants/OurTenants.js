import React from "react";
import styles from "./OurTenants.module.css";
import { Section } from "../../ux";
import { tenants } from "./data";

const OurTenants = () => {
  return (
    <Section background="ourTenantsBackground">
      <div className={styles.ourTenants}>
        <div className={styles.header}>
          <h3>Who Visits Crowned Comforts: Our Tenants</h3>
          <p className="text-regular">
            Our selective client database includes large enterprise partners,
            health systems, world-class universities, and vetted private
            travelers. While clients vary based on local market characteristics,
            we always maintain the feel of our partners’ communities.
          </p>
        </div>
        <ul className={styles.cards}>
          {tenants.map((tenant, index) => (
            <li className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <img src={tenant.image} alt="" />
              </div>
              <div className={styles.content}>
                <p className="text-header">{tenant.profession}</p>
                <p className="text-large">{`(General Stay Length: ${tenant.typicalStay})`}</p>
                <p className="text-regular">{tenant.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default OurTenants;
