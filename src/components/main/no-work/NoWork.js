import { useState } from 'react';

import NoworkPopup from '../nowork-popup/NoworkPopup';
import './no-work.css';

const NoWork = () => {

  const [ popupOpen, setPopupOpen] = useState(false);

  const changePopup = (bool) => {
    setPopupOpen(bool)
  }

  return <section className='no-work font_display'>
    <h2 className='no-work__title'>Нет подходящей вакансии?</h2>
    <p className='no-work__text'>Расскажите нам о своем опыте, а мы подберем варианты</p>
    <button type='button' className='no-work__button' onClick={()=>changePopup(true)}>Начать делиться знаниями</button>
    <NoworkPopup popupOpen={popupOpen} popupClose={changePopup}/>
  </section>
}

export default NoWork
