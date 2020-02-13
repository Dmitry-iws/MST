import React from 'react'
import styles from './Nav.module.sass'

const Nav = ({ className }) => {
  const styleNav = [styles.Nav, className].join(' ')

  return (
    <nav className={styleNav}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            архитектура
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Благоустройство
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Безопастность
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Инженерия
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Инфраструктура
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Транспортная доступность
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
