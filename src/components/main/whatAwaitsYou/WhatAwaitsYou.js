import { useInView } from 'react-intersection-observer'
import './whatAwaitsYou.css'
import cat from '../../../images/cat-blok6.svg'

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
          <span className='whatAwaitsYou__context_desc1'>
          <b>≈ 50 человек</b>
            <br /> в группе
            </span>
            <span className='whatAwaitsYou__context_mobile1'>≈ 50 человек в группе</span>

          </p>
        </li>
        <li className={secondAnimation}>
          <p className='whatAwaitsYou__context'>
            <span className='whatAwaitsYou__context_desc2'>
              <b>2-3</b> часа в день,
              <br />
              можно удаленно
            </span>
            <span className='whatAwaitsYou__context_mobile2'>2-3 часа в день, можно удаленно</span>
          </p>
        </li>
        <li className={thirdAnimation}>
          <p className='whatAwaitsYou__context'>
            <span className='whatAwaitsYou__context_desc3'>
              <b>35 — 55000 ₽</b> доход <br />
              в месяц
            </span>
            <span className='whatAwaitsYou__context_mobile3'>35 — 55000 ₽ доход в месяц</span>
          </p>
        </li>
      </ul>
      <img className='whatAwaitsYou__cat' src={cat}></img>
    </section>
  )
}

export default WhatAwaitsYou
