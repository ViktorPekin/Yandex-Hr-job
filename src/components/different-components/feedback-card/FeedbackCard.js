import './feedback-card.css';
import cardImg from '../../../images/foto-feedback.png';
const FeedbackCard = () => {
  return <div className='feedback-card'>
    <img
      className='feedback-card__card-img'
      src={cardImg} alt="Настя"
    />
    <div className='feedback-card__card-title'>Настя</div>
    <div className='feedback-card__card-text'>«Всё моё наставничество — это челлендж». До работы в Яндекс.Практикуме Настя прошла Школу наставников Практикума, где с ней работал коуч.</div>
    <div className='feedback-card__card-text'>«Всё моё наставничество — это челлендж». До работы в Яндекс.Практикуме Настя прошла Школу наставников Практикума, где с ней работал коуч.</div>
  </div>
}

export default FeedbackCard