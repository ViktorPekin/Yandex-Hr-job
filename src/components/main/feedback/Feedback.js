import './feedback.css';
import FeedbackCard from '../../different-components/feedback-card/FeedbackCard';

const Feedback = () => {
  return <section className='feedback font_display'>
    <h2 className='feedback__title'>Отзывы (Очень черновой вариант)</h2>
    <div className='feedback__container'>
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </div>
  </section>
}

export default Feedback
