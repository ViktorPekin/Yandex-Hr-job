import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Vacancy = (props) => {
  const openVacancyPage = () => {
    localStorage.setItem('VacancyInfo', JSON.stringify(props.card))
  }

  return (
    <li className='vacancy'>
      <div className='vacancy__front'>
        <p className='vacancy__profession'>{props.card.profession}</p>
        <h3 className='vacancy__well'>{props.card.well}</h3>
        <p className='vacancy__salary'>{props.card.salary}</p>
      </div>
      <Link to='/vacancy' target='_blank' onClick={openVacancyPage} className='vacancy__back'>
        <ul className='vacancy__info-container'>
          {props.card.info.map((element) => (
            <li className='vacancy__info' key={uuidv4()}>
              {element}
            </li>
          ))}
        </ul>
        <p className='vacancy__info-more'>Подробнее</p>
      </Link>
    </li>
  )
}

export default Vacancy
