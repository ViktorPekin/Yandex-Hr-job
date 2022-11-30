import './feedback.css';
import FeedbackCard from '../../different-components/feedback-card/FeedbackCard';

const Feedback = () => {
  return <section className='feedback'>
    <h2 className='feedback__title font_display'>Отзывы наших коллег</h2>
    <div className='feedback__container'>
      <FeedbackCard />
      <FeedbackCard />
    </div>
    <button type='button' className='feedback__button'>Читать больше отзывов</button>
  </section>
}

export default Feedback
