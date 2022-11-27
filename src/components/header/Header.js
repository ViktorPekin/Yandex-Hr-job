const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'></div>
      <ul className='header__links'>
        <li className='header__link'>Задачи</li>
        <li className='header__link'>Преимущества</li>
        <li className='header__link'>Отзывы</li>
        <li className='header__link header__link_border_true'>Вакансии</li>
      </ul>
    </header>
  )
}

export default Header
