import styles from "./OurPromise.module.css";

export const promises = [
  {
    title: "Our Promise",
    text: (
      <div className={styles.descriptionContent}>
        <p className={`${styles.title} text-large`}>Pristine Apartments</p>
        <p className={`${styles.text} text-regular`}>
          With regular inspections, frequent cleanings, and in-house
          maintenance, our teams ensure that all of our apartments remain in
          excellent condition.
        </p>
        <p className={`${styles.title} text-large`}>Residential Environment</p>
        <p className={`${styles.text} text-regular`}>
          Our house rules and tenant screening processes ensure that our tenants
          maintain the residential feel of our partners’ luxury residential
          buildings.
        </p>
        <p className={`${styles.title} text-large`}>Tech-Enabled Security</p>
        <p className={`${styles.text} text-regular`}>
          Our in-unit technology, featuring smart decibel detectors, humidity
          sensors, and smoke and tobacco sensors, empowers our team to ensure
          tenants uphold all community guidelines seamlessly and responsibly.
        </p>
      </div>
    ),
  },
  {
    title: "Advantages of Leasing with Us",
    text: (
      <div className={styles.descriptionContent}>
        <p className={`${styles.title} text-large`}>
          Minimize operating risk with long-term leases that create a floor for
          income.
        </p>

        <p className={`${styles.title} text-large`}>
          Broaden your tenant pool by connecting with potential renters already
          residing in your community during their stay with Hyatus.
        </p>

        <p className={`${styles.title} text-large`}>
          Provide tenants with convenient monthly accommodations for visiting
          friends or family.
        </p>

        <p className={`${styles.title} text-large`}>
          Offer future tenants accommodations during transitional periods.
        </p>
      </div>
    ),
  },
  {
    title: "Our Communities",
    text: (
      <div className={styles.descriptionContent}>
        <p className={`${styles.title} text-regular`}>
          Minimize operating risk with long-term leases that create a floor for
          income.
        </p>

        <p className={`${styles.bullet} text-large`}>Limit unit capacity</p>
        <p className={`${styles.bullet} text-large`}>
          Prohibit parties & large events
        </p>
        <p className={`${styles.bullet} text-large`}>Enforce quiet hours</p>
        <p className={`${styles.bullet} text-large`}>
          Prohibit smoking & vaping
        </p>

        <p className={`${styles.title} text-regular`}>
          All rules are clearly stated, highlighted, and agreed to in our signed
          rental agreement between Hyatus and the tenant.
        </p>
      </div>
    ),
  },
];
