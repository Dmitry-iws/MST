import React from 'react'
import styles from './Banner.module.sass'
import ReadMore from '../ReadMore/ReadMore'

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.tytle}>{props.title}</h1>
        <ReadMore text={props.text} minLength={props.minLength} />
        <div className={styles.pages}>
          <span>{props.page}</span>
          <span className={styles.separator}>/</span>
          <span>{props.pages}</span>
        </div>
      </div>
      <img src={props.img} alt={props.title} className={styles.img} />
    </div>
  )
}

export default Banner
