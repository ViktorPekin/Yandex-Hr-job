import { useState } from 'react';

import './first.css';




const First = () => {

  const [ animation, setAnimation ] = useState(true);

  const animationManagement = () => {
    setAnimation(false);
  }


  const animationManagementy = () => {
    console.log('dd')
    setAnimation(true);
  }

  return <section className='first font_display'>
    <h1 className='first__title'>Наставник или ревьюер?</h1>
    <p className='first__text'>Решать тебе!</p>
    <button type='button' className='first__button'>Начать делиться знаниями</button>
    <div className='first__bable first__bable_pozition_one' style={animation ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}} onMouseOver={animationManagement} onMouseLeave={animationManagementy}>
      <p className='first__bable-text'>Делись знаниями в программировании</p>
    </div>
    <div className='first__bable first__bable_pozition_two' style={animation ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}} onMouseOver={animationManagement} onMouseLeave={animationManagementy}>
      <p className='first__bable-text'>Получай доход от&nbsp;35&nbsp;тысяч&nbsp;в&nbsp;мес.</p>
    </div>
    <div className='first__bable first__bable_pozition_three' style={animation ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}} onMouseOver={animationManagement} onMouseLeave={animationManagementy}>
      <p className='first__bable-text'>Стань частью сообщества экспертов</p>
    </div>
    <div className='first__bable first__bable_pozition_four' style={animation ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}} onMouseOver={animationManagement} onMouseLeave={animationManagementy}>
      <p className='first__bable-text first__bable-text_width_small'>Развивай личный бренд</p>
    </div>
    <div className='first__bable first__bable_pozition_five' style={animation ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}} onMouseOver={animationManagement} onMouseLeave={animationManagementy}>
      <p className='first__bable-text'>Делись опытом в&nbsp;маркетинге&nbsp;и&nbsp;дизайне</p>
    </div>

  </section>
}

export default First
