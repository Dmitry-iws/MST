import React from 'react'
import styles from './Header.module.sass'
import Navigation from './Navigation/Navigation'
import icon from '../../Assets/Image/IconBurger.png'

const Header = ({ className }) => {
  const headerStyle = [styles.Header, className].join(' ')
  return (
    <header className={headerStyle}>
      <div className={styles.squreLeft}></div>
      <h1 className={styles.title}>Первомайская</h1>
      <Navigation />
      <p className={styles.contact}>8 888 888 88 88</p>
      <div className={styles.squreRight}>
        <img src={icon} alt='icon' className={styles.img} />
      </div>
    </header>
  )
}

export default Header
