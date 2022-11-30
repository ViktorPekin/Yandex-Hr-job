import './advantages.css'

import iconEducation from '../../../images/advantage_icon/Icon_education.svg';
import iconChange from '../../../images/advantage_icon/Icon_change.svg';
import iconRocket from '../../../images/advantage_icon/Icon_rocket.svg';
import iconStairs from '../../../images/advantage_icon/Icon_stairs.svg';

const Advantages = () => {
  return (
    <section className='advantages' id='advantages'>
      <h2 className='advantages__title font_display'>Преимущества  работы с нами</h2>
      <div className='advantages__container'>
        <div className='advantages__card'>
          <h3 className='advantages__card-title'>Обучение</h3>
          <p className='advantages__card-text'>
            Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей. Сможете развить свои софт скиллы.
          </p>
          <img
            className='advantages__card-img'
            src={iconEducation}
            alt='Обучение'
          />
        </div>
        <div className='advantages__card'>
          <h3 className='advantages__card-title'>Изменения</h3>
          <p className='advantages__card-text'>
            Меняйте жизнь людей к лучшему. Более 1000 наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться
          </p>
          <img
            className='advantages__card-img'
            src={iconChange}
            alt='Изменения'
          />
        </div>
        <div className='advantages__card'>
          <h3 className='advantages__card-title'>Развитие</h3>
          <p className='advantages__card-text'>
            Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как об эксперте.
          </p>
          <img
            className='advantages__card-img'
            src={iconRocket}
            alt='Развитие'
          />
        </div>
        <div className='advantages__card'>
          <h3 className='advantages__card-title'>Карьера</h3>
          <p className='advantages__card-text'>
            Вы можете развиваться внутри роли: стать старшим наставником или сеньор-ревьювером.
          </p>
          <img
            className='advantages__card-img'
            src={iconStairs}
            alt='Карьера'
          />
        </div>
      </div>
    </section>
  )
}

export default Advantages
