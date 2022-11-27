import { useInView } from 'react-intersection-observer'
import './howToBecome.css'

const HowToBecome = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const headerAnimation = inView ? 'howToBecome__header howToBecome__header_animation' : 'howToBecome__header'
  const firstTaskAnimation = inView
    ? 'howToBecome__firstTask howToBecome__firstTask_animation'
    : 'howToBecome__firstTask'
  const secondTaskAnimation = inView
    ? 'howToBecome__secondTask howToBecome__secondTask_animation'
    : 'howToBecome__secondTask'
  const thirdTaskAnimation = inView
    ? 'howToBecome__thirdTask howToBecome__thirdTask_animation'
    : 'howToBecome__thirdTask'
  return (
    <section className='howToBecome' ref={ref}>
      <h2 className={headerAnimation}>Как стать экспертом?</h2>
      <ul className='howToBecome__list'>
        <li className={firstTaskAnimation}>
          <span className='howToBecome__counter'>1</span>
          <p className='howToBecome__context'>
            <span>Выберите роль</span>
            <span>и заполните заявку</span>
          </p>
        </li>
        <li className={secondTaskAnimation}>
          <span className='howToBecome__counter'>2</span>
          <p className='howToBecome__context'>
            <span>Пройдите отбор</span>
            <span>и бесплатное обучение</span>
          </p>
        </li>
        <li className={thirdTaskAnimation}>
          <span className='howToBecome__counter'>3</span>
          <p className='howToBecome__context'>
            <span>Начните делиться знаниями</span>
            <span>со студентами Яндекс Практикума</span>
          </p>
        </li>
      </ul>
      <button type='button' className='howToBecome__button'>
        Начать делиться знаниями
      </button>
    </section>
  )
}

export default HowToBecome
