const Header = () => {
  return (
    <header className='header'>
      <a className='header__logo' href='https://practicum.yandex.ru/'></a>
      <nav className='header__links'>
        <a className='header__link' href='#tasks'>
          Задачи экспертов
        </a>
        <a className='header__link' href='#advantages'>
          Преимущества
        </a>
        <a className='header__link-border' href='#vacancies'>
          Кого мы ищем
        </a>
      </nav>
    </header>
  )
}

export default Header
