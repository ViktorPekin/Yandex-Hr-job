const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'></div>
      <nav className='header__links'>
        <a className='header__link' href='#tasks'>
          Задачи экспертов
        </a>
        <a className='header__link' href='#advantages'>
          Преимущества
        </a>
        <a className='header__link header__link_border_true' href='#vacancies'>
          Кого мы ищем
        </a>
      </nav>
    </header>
  )
}

export default Header
