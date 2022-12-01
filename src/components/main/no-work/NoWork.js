import './no-work.css'

const NoWork = (props) => {
  return (
    <section className='no-work font_display'>
      <h2 className='no-work__title font_display'>Нет подходящего предложения?</h2>
      <p className='no-work__text'>Расскажите нам о своем опыте, а мы попробуем подобрать варианты</p>
      <button onClick={() => props.onOpenPopup(true)} type='button' className='no-work__button'>
        Заполнить форму
      </button>
      <div className='no-work__img'></div>
    </section>
  )
}

export default NoWork
