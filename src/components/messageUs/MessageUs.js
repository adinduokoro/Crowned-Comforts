import React from "react";
import styles from "./MessageUs.module.css";
import { Section } from "../../ux";
import messageUsImage from "../../assets/messageus-image.jpg";

const MessageUs = () => {
  return (
    <Section>
      <div className={styles.messageUs}>
        <h3 className={styles.header}>
          <span>L</span>ETS <span>G</span>ET IN <span>T</span>OUCH
        </h3>
        <div className={styles.content}>
          <div className={styles.messageBox}>
            <div className={styles.subheader}>
              <div className={styles.line}></div>
              <h3 className={styles.title}>Message</h3>
            </div>
            <form className={styles.form}>
              <div className={styles.inputs}>
                <div className={styles.fields}>
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Email" />
                </div>
                <textarea
                  className={styles.message}
                  name=""
                  id=""
                  placeholder="Message"
                ></textarea>
              </div>
              <div className={styles.buttonContainer}>
                <button className="primary-button">Submit</button>
              </div>
            </form>
          </div>
          <div className={styles.imageContainer}>
            <img src={messageUsImage} alt="" />
          </div>
        </div>
        <p className={`${styles.footNote} text-regular`}>
          Our local teams are always available 24 hours a day 7 days a week to
          help you checking-in or provide any other support you may need. If you
          have any questions please contact us. We are always a message, text,
          email, instant-chat, or phone call away!
        </p>
      </div>
    </Section>
  );
};

export default MessageUs;
