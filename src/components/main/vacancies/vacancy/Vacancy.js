const vacancy = (props) => {
  return (
    <li className='vacancy'>
      <div className='vacancy__front rotate'>
        <p>{props.card.profession}</p>
        <h3>{props.card.well}</h3>
        <p>{props.card.salary}</p>
      </div>
      <div className='vacancy__back rotate'>
        <ul>
          {props.card.info.map((element) => (
            <li className='vacancy__text'>{element}</li>
          ))}
        </ul>
        <a>Подробнее</a>
      </div>
    </li>
  )
}

export default vacancy
