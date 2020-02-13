import React from 'react'
import styles from './Navigation.module.sass'

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            О комплексе
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Особенности
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Пентхаусы
          </a>
        </li>
        <li className={styles.list__item}>
          <a href='##' className={styles.list__item__link}>
            Выбрать квартиру
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
