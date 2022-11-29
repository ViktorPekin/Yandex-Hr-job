import './advantages.css'

const Advantages = () => {
  return (
    <section className='advantages font_display' id='advantages'>
      <h2 className='advantages__title'>Преимущества работы в Практикум</h2>
      <div className='advantages__container'>
        <div className='advantages__card'>
          <div className='advantages__card-title'>Обучение</div>
          <div className='advantages__card-text'>
            Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей. Сможете развить свои софт
            скиллы.
          </div>
          <img
            className='advantages__card-img'
            src='https://wp-s.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-vzglyad.jpg'
            alt='Обучение'
          />
        </div>
        <div className='advantages__card'>
          <div className='advantages__card-title'>Изменения</div>
          <div className='advantages__card-text'>
            Меняйте жизнь людей к лучшему. Более 1000 наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими
            делиться
          </div>
          <img
            className='advantages__card-img'
            src='https://wp-s.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-vzglyad.jpg'
            alt='Изменения'
          />
        </div>
        <div className='advantages__card'>
          <div className='advantages__card-title'>Развитие</div>
          <div className='advantages__card-text'>
            Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как
            об эксперте.
          </div>
          <img
            className='advantages__card-img'
            src='https://wp-s.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-vzglyad.jpg'
            alt='Развитие'
          />
        </div>
        <div className='advantages__card'>
          <div className='advantages__card-title'>Карьера</div>
          <div className='advantages__card-text'>
            Вы можете развиваться внутри роли: стать старшим наставником или сеньор-ревьювером.
          </div>
          <img
            className='advantages__card-img'
            src='https://wp-s.ru/wallpapers/5/18/289291145046987/evropejskaya-koshka-dikij-vzglyad.jpg'
            alt='Карьера'
          />
        </div>
      </div>
    </section>
  )
}

export default Advantages
