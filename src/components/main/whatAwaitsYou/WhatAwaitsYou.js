import { useInView } from 'react-intersection-observer'
import './whatAwaitsYou.css'

const WhatAwaitsYou = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const headerAnimation = inView ? 'whatAwaitsYou__header headerAnimation' : 'whatAwaitsYou__header'
  const firstAnimation = inView
    ? 'whatAwaitsYou__item whatAwaitsYou__item_first firstAnimation'
    : 'whatAwaitsYou__item whatAwaitsYou__item_first'
  const secondAnimation = inView
    ? 'whatAwaitsYou__item whatAwaitsYou__item_second secondAnimation'
    : 'whatAwaitsYou__item whatAwaitsYou__item_second'
  const thirdAnimation = inView
    ? 'whatAwaitsYou__item whatAwaitsYou__item_third thirdAnimation'
    : 'whatAwaitsYou__item whatAwaitsYou__item_third'
  return (
    <section className='whatAwaitsYou' ref={ref}>
      <h2 className={headerAnimation}>Что вас ждет?</h2>
      <ul className='whatAwaitsYou__list'>
        <li className={firstAnimation}>
          <p className='whatAwaitsYou__context'>
            В группе ≈ <br /> 50 человек
          </p>
        </li>
        <li className={secondAnimation}>
          <p className='whatAwaitsYou__context'>2-3 часа в день</p>
        </li>
        <li className={thirdAnimation}>
          <p className='whatAwaitsYou__context'>от 35 до 55 тысяч рублей</p>
        </li>
      </ul>
    </section>
  )
}

export default WhatAwaitsYou
