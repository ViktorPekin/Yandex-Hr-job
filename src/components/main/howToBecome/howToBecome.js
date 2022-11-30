import { useInView } from 'react-intersection-observer'
import './howToBecome.css'

const HowToBecome = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const headerAnimation = inView ? 'howToBecome__header howToBecome__header_animation' : 'howToBecome__header'
  const firstTaskAnimation = inView
    ? 'howToBecome__task howToBecome__task_first firstTask_animation'
    : 'howToBecome__task howToBecome__task_first'
  const secondTaskAnimation = inView
    ? 'howToBecome__task howToBecome__task_second secondTask_animation'
    : 'howToBecome__task howToBecome__task_second'
  const thirdTaskAnimation = inView
    ? 'howToBecome__task howToBecome__task_third thirdTask_animation'
    : 'howToBecome__task howToBecome__task_third'
  const buttonAnimation = inView ? 'howToBecome__button button_animation' : 'howToBecome__button'

  const scrollTo = () => {
    const element = document.querySelector('#vacancies')
    element.scrollIntoView()
  }

  return (
    <section className='howToBecome' ref={ref}>
      <h2 className={headerAnimation}>Как стать экспертом?</h2>
      <div className='howToBecome__list-wrapper'>
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
              <span>
                Делитесь знаниями <br />
                со студентами
              </span>
            </p>
          </li>
        </ul>
        <button type='button' className={buttonAnimation} onClick={() => scrollTo()}>
          <span className='howToBecome__button_connect'>
            Присоединиться <br />к команде
          </span>
          <span className='howToBecome__button_form'>Заполнить форму</span>
        </button>
      </div>
    </section>
  )
}

export default HowToBecome
