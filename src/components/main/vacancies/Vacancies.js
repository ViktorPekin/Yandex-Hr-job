import { useEffect, useState } from 'react'
import Vacancy from './vacancy/Vacancy'
import data from '../../../utils/bd-mentor.json'
import {
  NUMBER_CARD_PC,
  NUMBER_CARD_MOBILE,
  SCREEN_PC,
  PROGRAMMING,
  ANALYTICS,
  DESIGN,
  MARKETING,
  MANAGEMENT,
} from '../../../utils/constants'

const Vacancies = () => {
  const [dataBase, setDataBase] = useState([])
  const [start, setStart] = useState(false)
  const [activeJobMentor, setActiveJobMentor] = useState(true)
  const [activeDirection, setActiveDirection] = useState(0)
  const [cardOnPage, setCardOnPage] = useState(0)
  const [hiddenButton, setHiddenButton] = useState(true)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setStart(true)
    setDataBase(data.programming)
  }, [])

  useEffect(() => {
    if (window.screen.width > SCREEN_PC) {
      setCardOnPage(NUMBER_CARD_PC)
      checkHiddenButton(dataBase, NUMBER_CARD_PC)
      setMobile(false)
    } else {
      setCardOnPage(NUMBER_CARD_MOBILE)
      checkHiddenButton(dataBase, NUMBER_CARD_MOBILE)
      setMobile(true)
    }
  }, [dataBase])

  useEffect(() => {
    window.addEventListener('resize', setTimeoutResize)
    return () => {
      window.removeEventListener('resize', setTimeoutResize)
    }
  })

  let doit
  const setTimeoutResize = () => {
    clearTimeout(doit)
    doit = setTimeout(changeWidthWindow, 1000)
  }

  const changeWidthWindow = () => {
    if (window.screen.width > SCREEN_PC) {
      setCardOnPage(NUMBER_CARD_PC)
      checkHiddenButton(dataBase, NUMBER_CARD_PC)
      setMobile(false)
    } else {
      setCardOnPage(NUMBER_CARD_MOBILE)
      checkHiddenButton(dataBase, NUMBER_CARD_MOBILE)
      setMobile(true)
    }
  }

  const addCard = () => {
    setHiddenButton(false)
    setCardOnPage(dataBase.length)
  }

  const handleDirection = (numberElement, mentorDirection, reviewDirection) => {
    setActiveDirection(numberElement)
    if (activeJobMentor === true) {
      setDataBase(mentorDirection)
      checkHiddenButton(mentorDirection, cardOnPage)
    } else {
      setDataBase(reviewDirection)
      checkHiddenButton(reviewDirection, cardOnPage)
    }
  }

  const checkHiddenButton = (direction, amount) => {
    direction.length > amount ? setHiddenButton(true) : setHiddenButton(false)
  }

  return (
    <section className='vacancies' id='vacancies'>
      <h2 className='vacancies__title font_display'>Открытые предложения</h2>
      <ul className='vacancies__job-container'>
        <li
          onClick={() => {
            setActiveJobMentor(true)
            setDataBase(data.programming)
            setActiveDirection(PROGRAMMING)
            checkHiddenButton(data.programming, cardOnPage)
          }}
          className={activeJobMentor ? 'vacancies__job vacancies__job_active' : 'vacancies__job'}
        >
          Для наставников
        </li>
        <li
          onClick={() => {
            setActiveJobMentor(false)
            setDataBase(data.programmingReview)
            setActiveDirection(PROGRAMMING)
            checkHiddenButton(data.programmingReview, cardOnPage)
          }}
          className={activeJobMentor ? 'vacancies__job' : 'vacancies__job vacancies__job_active'}
        >
          Для ревьюеров
        </li>
      </ul>
      <div className='vacancies__block-direction'>
        <ul className='vacancies__direction-container'>
          <li
            onClick={() => handleDirection(PROGRAMMING, data.programming, data.programmingReview)}
            className={
              activeDirection === PROGRAMMING
                ? 'vacancies__direction vacancies__direction_active'
                : 'vacancies__direction'
            }
          >
            Программирование
          </li>
          <li
            onClick={() => handleDirection(ANALYTICS, data.analytics, data.analyticsReview)}
            className={
              activeDirection === ANALYTICS
                ? 'vacancies__direction vacancies__direction_active'
                : 'vacancies__direction'
            }
          >
            Аналитика
          </li>
          <li
            onClick={() => handleDirection(DESIGN, data.design, data.designReview)}
            className={
              activeDirection === DESIGN ? 'vacancies__direction vacancies__direction_active' : 'vacancies__direction'
            }
          >
            Дизайн
          </li>
          <li
            onClick={() => handleDirection(MARKETING, data.marketing, data.marketingReview)}
            className={
              activeDirection === MARKETING
                ? 'vacancies__direction vacancies__direction_active'
                : 'vacancies__direction'
            }
          >
            Маркетинг
          </li>
          <li
            onClick={() => handleDirection(MANAGEMENT, data.management, data.managementReview)}
            className={
              activeDirection === MANAGEMENT
                ? 'vacancies__direction vacancies__direction_active'
                : 'vacancies__direction'
            }
          >
            Менеджмент
          </li>
        </ul>
        {dataBase.length ? (
          <div className='vacancies__new-vacancy'>
            <div className='vacancies__new-vacancy-logo'></div>
            <p className='vacancies__new-vacancy-text'>Новые предложения</p>
          </div>
        ) : (
          ''
        )}
      </div>
      {dataBase.length ? (
        <ul className='vacancies__container'>
          {start
            ? dataBase
                .slice(0, cardOnPage)
                .map((element) => <Vacancy card={element} mobile={mobile} key={element.id} />)
            : ''}
        </ul>
      ) : (
        <div>
          <p className='vacancies__not-vacancy-text'>Таких вакансий пока нет 😊</p>
          <p className='vacancies__not-vacancy-text'>Чтобы посмотреть другие, поменяйте роль или направление.</p>
        </div>
      )}
      <p
        onClick={addCard}
        className={hiddenButton ? 'vacancies__button' : 'vacancies__button vacancies__button_hidden'}
      >
        Показать больше
      </p>
    </section>
  )
}

export default Vacancies
