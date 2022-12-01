import Iframe from 'react-iframe'
import './nowork-popup.css'

const NoworkPopup = (props) => {
  const popupClose = () => {
    props.onOpenPopup(false)
  }
  return (
    <section
      className={props.openPopup ? 'nowork-popup font_display nowork-popup_opened' : 'nowork-popup font_display'}
    >
      <script src='https://yastatic.net/s3/frontend/forms/_/embed.js'></script>
      <div className='nowork-popup__container'>
        <button type='button' className='nowork-popup__button' onClick={popupClose}>
          Закрыть
        </button>
        <h2 className='nowork-popup__title font_display'>Не нашли себя в открытых предложениях?</h2>
        <Iframe
          src='https://forms.yandex.ru/u/638601d75d2a0618e5ac9bb4/?iframe=1'
          name='ya-form-638601d75d2a0618e5ac9bb4'
          className='nowork-popup__form'
        ></Iframe>
      </div>
    </section>
  )
}

export default NoworkPopup
