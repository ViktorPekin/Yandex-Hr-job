const vacancy = (props) => {
  return (
    <li className='vacancy'>
      <div className='vacancy__front'>
        <p className='vacancy__profession'>{props.card.profession}</p>
        <h3 className='vacancy__well'>{props.card.well}</h3>
        <p className='vacancy__salary'>{props.card.salary}</p>
      </div>
      <div className='vacancy__back'>
        <ul className='vacancy__info-container'>
          {props.card.info.map((element) => (
            <li className='vacancy__info'>{element}</li>
          ))}
        </ul>
        <p className='vacancy__info-more'>Подробнее</p>
      </div>
    </li>
  )
}

export default vacancy
