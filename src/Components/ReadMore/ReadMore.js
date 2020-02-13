import React, { useState } from 'react'
import styles from './ReadMore.module.sass'

const ReadMore = ({ text, minLength }) => {
  const [readMore, setReadMore] = useState(true)

  const handlerReadMore = () => {
    setReadMore(!readMore)
  }

  let content = null

  if (readMore) {
    content = text.slice(0, minLength)
  } else {
    content = text
  }

  return (
    <p className={styles.text}>
      {content}

      <span className={styles.more} onClick={handlerReadMore}></span>
    </p>
  )
}

export default ReadMore
