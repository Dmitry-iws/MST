import React from 'react'
import styles from './Footer.module.sass'

const Footer = ({ className }) => {
  const footerStyle = [styles.Footer, className].join(' ')

  return (
    <footer className={footerStyle}>
      <p className={styles.text}>
        Разработано в MST <span className={styles.separator}> | </span> 2018
      </p>
    </footer>
  )
}

export default Footer
