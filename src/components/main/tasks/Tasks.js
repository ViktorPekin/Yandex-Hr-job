const Tasks = () => {
  return (
    <section className='tasks' id='tasks'>
      <ul className='tasks__container'>
        <li className='task'>
          <img
            className='task__image'
            src='https://www.gazeta-chi.ru/uploads/entries/97maxresdefault.jpg'
            alt='Задача наставника'
          ></img>
          <div className='task__content'>
            <h2 className='task__title font_display'>Задачи наставника</h2>
            <ul className='task__container'>
              <li className='task__text '>Помогать студентам ставить цели, рефлексировать и делать выводы</li>
              <li className='task__text'>Отвечать на их вопросы в чате</li>
              <li className='task__text'>Проводить вебинары 2 раза в месяц и давать обратную связь</li>
              <li className='task__text'>Делиться опытом и мотивировать</li>
            </ul>
          </div>
        </li>
        <li className='task'>
          <img
            className='task__image'
            src='https://www.gazeta-chi.ru/uploads/entries/97maxresdefault.jpg'
            alt='Задача ревьюера'
          ></img>
          <div className='task__content'>
            <h2 className='task__title font_display'>Задачи ревьюера</h2>
            <ul className='task__container'>
              <li className='task__text '>Проверять код и проекты студентов</li>
              <li className='task__text'>Простыми словами объяснять им их ошибки</li>
              <li className='task__text'>Давать корректирующую обратную связь</li>
              <li className='task__text'>Оценивать работы - зачёт/незачёт</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Tasks
