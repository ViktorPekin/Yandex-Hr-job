import { v4 as uuidv4 } from 'uuid'

const Vacancy = (props) => {
  const openVacancyPage = () => {
    localStorage.setItem('VacancyInfo', JSON.stringify(props.card))
  }

  return (
    <li className='vacancy'>
      <div className='vacancy__front'>
        <div className='vacancy__front-container'>
          <div className='vacancy__profession-conatiner'>
            <p className='vacancy__profession'>{props.card.profession}</p>
            <div className={props.card.new === 'false' ? '' : 'vacancy__profession-logo'}></div>
          </div>
          <h3 className='vacancy__well'>{props.card.well}</h3>
        </div>
        <div className='vacancy__salary-contauner'>
          <p className='vacancy__salary'>{props.card.salary}</p>
          {props.mobile ? <div className='vacancy__salary-arrow'></div> : ''}
        </div>
      </div>
      <div onClick={openVacancyPage} className='vacancy__back'>
        <div className='vacancy__back-container'>
          <h3 className='vacancy__info-title'>Кого мы ищем</h3>
          <ul className='vacancy__info-container'>
            {props.card.info.map((element) => (
              <li className='vacancy__info' key={uuidv4()}>
                {element}
              </li>
            ))}
          </ul>
        </div>
        <a className='vacancy__info-more' href={props.card.link} target='_blank' rel='noreferrer'>
          Подробнее
        </a>
      </div>
    </li>
  )
}

export default Vacancy
