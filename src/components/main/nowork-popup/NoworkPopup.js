import './nowork-popup.css'

const NoworkPopup = (props) => {
  const popupClose = () => {
    props.popupClose(false)
  }

  return (
    <div className={props.popupOpen ? 'nowork-popup font_display nowork-popup_opened' : 'nowork-popup font_display'}>
      <button type='button' className='nowork-popup__button' onClick={popupClose}>
        Закрыть
      </button>
    </div>
  )
}

export default NoworkPopup
