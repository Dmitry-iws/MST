import React from 'react'
import styles from './MainPage.module.sass'
import Header from '../../Components/Header'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import Image from '../../Assets/Image/architecture.png'

const MainPage = () => {
  const data = [
    {
      id: 1,
      title: 'Архитектура',
      text: `Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни.
         Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни`
    },
    {
      id: 2,
      title: 'Архитектура',
      text:
        'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'
    },
    {
      id: 3,
      title: 'Архитектура',
      text:
        'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'
    },
    {
      id: 4,
      title: 'Архитектура',
      text:
        'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'
    },
    {
      id: 5,
      title: 'Архитектура',
      text:
        'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'
    },
    {
      id: 6,
      title: 'Архитектура',
      text:
        'Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни'
    }
  ]

  let item = 0

  return (
    <div className={styles.MainPage}>
      <div className={styles.container}>
        <Header className={styles.header} />
        <div className={styles.main}>
          <Nav className={styles.nav} />
          <div className={styles.content}>
            <Banner
              img={Image}
              title={data[item].title}
              text={data[item].text}
              pages={data.length}
              page={data[item].id}
              minLength={105}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
