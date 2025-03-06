import React from 'react'
import styles from "./Section.module.css"

const Section = ({children}) => {
  return (
    <div className={styles.section}>
        <div className={styles.wrapper}>{children}</div>
    </div>
  )
}

export default Section