import { useEffect, useState } from 'react'
import data from '../../../utils/bd-mentor.json'
import Vacancy from './vacancy/Vacancy'
const Vacancies = () => {
  const [bd, setBd] = useState([])
  const [activeJobMentor, setActiveJobMentor] = useState(true)
  const [activeDirection, setActiveDirection] = useState(0)
  const [cardOnPage, setCardOnPage] = useState(3)
  const [hiddenButton, setHiddenButton] = useState(true)

  useEffect(() => {
    setBd(data.programming)
  }, [])

  const addCard = () => {
    console.log(bd.length)
  }

  return (
    <section className='vacancies'>
      <h2 className='vacancies__title font_display'>Открытые предложения</h2>
      <ul className='vacancies__job-container'>
        <li
          onClick={(e) => setActiveJobMentor(true)}
          className={activeJobMentor ? 'vacancies__job vacancies__job_active' : 'vacancies__job'}
        >
          Для наставников
        </li>
        <li
          onClick={(e) => setActiveJobMentor(false)}
          className={activeJobMentor ? 'vacancies__job' : 'vacancies__job vacancies__job_active'}
        >
          Для ревьюеров
        </li>
      </ul>
      <ul className='vacancies__direction__container'>
        <li
          onClick={(e) => setActiveDirection(0)}
          className={
            activeDirection === 0 ? 'vacancies__direction vacancies__direction_active' : 'vacancies__direction'
          }
        >
          Программирование
        </li>
        <li
          onClick={(e) => setActiveDirection(1)}
          className={
            activeDirection === 1 ? 'vacancies__direction vacancies__direction_active' : 'vacancies__direction'
          }
        >
          Аналитика
        </li>
        <li
          onClick={(e) => setActiveDirection(2)}
          className={
            activeDirection === 2 ? 'vacancies__direction vacancies__direction_active' : 'vacancies__direction'
          }
        >
          Дизайн
        </li>
        <li
          onClick={(e) => setActiveDirection(3)}
          className={
            activeDirection === 3 ? 'vacancies__direction vacancies__direction_active' : 'vacancies__direction'
          }
        >
          Маркетинг
        </li>
        <li
          onClick={(e) => setActiveDirection(4)}
          className={
            activeDirection === 4 ? 'vacancies__direction vacancies__direction_active' : 'vacancies__direction'
          }
        >
          Менеджмен
        </li>
      </ul>
      <ul className='vacancies__container'>
        {bd.slice(0, 3).map((element) => (
          <Vacancy card={element} key={element.id} />
        ))}
      </ul>
      <button on onClick={addCard}>
        Еще
      </button>
    </section>
  )
}

export default Vacancies
