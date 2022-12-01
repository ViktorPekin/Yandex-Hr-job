const Practicum = () => {
  return (
    <section className='practicum'>
      <h2 className='practicum__title font_display'>Яндекс Практикум объединяет</h2>
      <div className='practicum__container'>
        <div className='practicum__text'>
          <div className='practicum__text-top'>
            <p className='practicum__text-content font_display'>7</p>
          </div>
          <div className='practicum__text-bottom'>
            <p className='practicum__text-content'>Факультетов</p>
          </div>
        </div>
        <div className='practicum__text'>
          <div className='practicum__text-top'>
            <p className='practicum__text-content font_display'>76</p>
          </div>
          <div className='practicum__text-bottom'>
            <p className='practicum__text-content'>Курсов</p>
          </div>
        </div>
        <div className='practicum__text'>
          <div className='practicum__text-top'>
            <p className='practicum__text-content font_display'>1300</p>
          </div>
          <div className='practicum__text-bottom'>
            <p className='practicum__text-content'>Экспертов</p>
          </div>
        </div>
        <div className='practicum__text'>
          <div className='practicum__text-top'>
            <p className='practicum__text-content font_display'>9000</p>
          </div>
          <div className='practicum__text-bottom'>
            <p className='practicum__text-content'>Выпускников</p>
          </div>
        </div>
        <div className='practicum__text-link'>
          <div className='practicum__img-arrow'></div>
          <a className='practicum__link' href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  )
}

export default Practicum
