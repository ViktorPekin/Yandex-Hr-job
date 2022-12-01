import { useState, useEffect } from 'react';

import './first.css';

const First = () => {

  const [animation, setAnimation] = useState(true);
  const [useWidthDesctop, setUseWidthDesctop] = useState({ winWidth: window.innerWidth })

  const detectSize = () => {
    setUseWidthDesctop({ winWidth: window.innerWidth })
  }
  const animationManagementStop = () => {
    setAnimation(false);
  }
  const animationManagementStart = () => {
    setAnimation(true);
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [useWidthDesctop])

  return <section className='first'>
    <article className='first_container'>
      <h1 className='first__title font_display'>{useWidthDesctop.winWidth > 375 ? 'Ищем ревьюеров и наставников в Практикум' : 'Ищем ревьюеров и наставников в Яндекс Практикум' }</h1>
      <p className='first__text'>Стань нашим экспертом! Делись своим опытом и знаниями.</p>
      <a href='#vacancies' className='first__link'>Посмотреть предложения</a>
    </article>
    <div className={useWidthDesctop.winWidth <= 880 ? 'first__bable first__bable_color_blue first__bable_pozition_one' : 'first__bable first__bable_pozition_one'} style={animation ? { animationPlayState: 'running' } : { animationPlayState: 'paused' }} onMouseOver={animationManagementStop} onMouseLeave={animationManagementStart}>
      <p className='first__bable-text'>Делись знаниями в&nbsp;программировании</p>
    </div>
    <div className={useWidthDesctop.winWidth > 880 ? 'first__bable first__bable_color_blue first__bable_pozition_two' : 'first__bable first__bable_pozition_two'} style={animation ? { animationPlayState: 'running' } : { animationPlayState: 'paused' }} onMouseOver={animationManagementStop} onMouseLeave={animationManagementStart}>
      <p className='first__bable-text first__bable-text_small'>Получай доход от&nbsp;35&nbsp;000 в&nbsp;месяц</p>
    </div>
    <div className='first__bable first__bable_pozition_three' style={animation ? { animationPlayState: 'running' } : { animationPlayState: 'paused' }} onMouseOver={animationManagementStop} onMouseLeave={animationManagementStart}>
      <p className='first__bable-text'>Развивай личный бренд</p>
    </div>
    <div className='first__bable first__bable_color_blue first__bable_pozition_four' style={animation ? { animationPlayState: 'running' } : { animationPlayState: 'paused' }} onMouseOver={animationManagementStop} onMouseLeave={animationManagementStart}>
      <p className='first__bable-text'>Делись опытом в дизайне и&nbsp;маркетинге</p>
    </div>
    <div className='first__bable first__bable_pozition_five' style={animation ? { animationPlayState: 'running' } : { animationPlayState: 'paused' }} onMouseOver={animationManagementStop} onMouseLeave={animationManagementStart}>
      <p className='first__bable-text'>Стань частью сообщества экспертов</p>
    </div>
    <div className='first__bable first__bable_color_blue first__bable_pozition_six' style={animation ? { animationPlayState: 'running' } : { animationPlayState: 'paused' }} onMouseOver={animationManagementStop} onMouseLeave={animationManagementStart}>
      <p className='first__bable-text'>Развивай свои софт скиллы</p>
    </div>
  </section>
}

export default First
