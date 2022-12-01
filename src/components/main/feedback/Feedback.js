import cardPhotoFirst from '../../../images/Photo1.jpg'
import cardPhotoSecond from '../../../images/Photo2.jpg'
import logoFeedback from '../../../images/logoFeedback.svg'

const Feedback = () => {
  return (
    <section className='feedback'>
      <h2 className='feedback__title font_display'>Отзывы наших коллег</h2>
      <div className='feedback__container'>
        <div className='feedback-card'>
          <img className='feedback-card__card-img' src={cardPhotoFirst} alt='Работник' />
          <div className='feedback-card__container'>
            <img className='feedback-card__icon' src={logoFeedback} alt='Иконка' />
            <div className='feedback-card__text-container'>
              <h3 className='feedback-card__card-title'>Максим</h3>
              <h3 className='feedback-card__card-subtitle'>Наставник на веб-факультете в Яндекс Практикуме</h3>
              <p className='feedback-card__card-text'>
                Почему я стал наставником? У меня накопилось много опыта и знаний, которыми я хочу делиться с теми, кто
                только начинает изучать веб-разработку.
              </p>
              <p className='feedback-card__card-text'>
                Я помню время, когда я сам только начинал учиться, и тогда не было никаких онлайн-курсов, а уж тем более
                площадок с наставниками. И это было сложнее, потому что сложно было понять, что действительно важно и
                нужно, а что нет.
              </p>
            </div>
          </div>
        </div>
        <div className='feedback-card'>
          <img className='feedback-card__card-img' src={cardPhotoSecond} alt='Работник' />
          <div className='feedback-card__container'>
            <img className='feedback-card__icon' src={logoFeedback} alt='Иконка' />
            <div className='feedback-card__text-container'>
              <h3 className='feedback-card__card-title'>Настя</h3>
              <h3 className='feedback-card__card-subtitle'>Наставница на веб-факультете в Яндекс Практикуме</h3>
              <p className='feedback-card__card-text'>
                Прогресс идёт, когда ты ставишь челлендж — задачу, которую, кажется, невозможно сделать. И когда ты
                берёшься за эту задачу, становится заметен прогресс.
              </p>
              <p className='feedback-card__card-text'>
                Всё моё наставничество — это челлендж, который показал, что всё возможно. Мои страхи не оправдались.
                Когда тебе что-то нужно, ты собираешься с силами и делаешь.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        type='button'
        className='feedback__button'
        href='https://career.habr.com/companies/praktikum-yandex/scores'
        target='_blank'
        rel='noreferrer'
      >
        Читать больше отзывов
      </a>
    </section>
  )
}

export default Feedback
