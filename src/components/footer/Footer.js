import tmLogo from '../../images/tm.svg'
import vkLogo from '../../images/vk.svg'
import logo from '../../images/logo-footer.svg'
import logoMobile from '../../images/logo-header.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__contacts'>
          <h2 className='footer__contacts_title'>8-800-700-93-29</h2>
          <p className='footer__contacts_subtitle'>Звонок по России бесплатный</p>
          <nav className='footer__contacts_links'>
            <a href='https://thecode.media/' className='footer__contacts_link' target='_blank' rel='noreferrer'>
              Журнал
            </a>
            <a href='https://t.me/practicum_experts' className='footer__contacts_link' target='_blank' rel='noreferrer'>
              <img src={tmLogo} alt='Лого Телеграм'></img>
            </a>
            <a
              href='https://vk.com/yandex.practicum'
              className='footer__contacts_link'
              target='_blank'
              rel='noreferrer'
            >
              <img src={vkLogo} alt='Лого Вконтакте'></img>
            </a>
          </nav>
        </div>
        <div className='footer__info'>
          <nav className='footer__info_links'>
            <a
              href='https://yandex.ru/support/praktikum/feedback.html'
              className='footer__info_link'
              target='_blank'
              rel='noreferrer'
            >
              Помощь
            </a>
            <a
              href='https://code.s3.yandex.net/License%20YSDA.pdf'
              className='footer__info_link'
              target='_blank'
              rel='noreferrer'
            >
              Лицензия
            </a>
            <a
              href='https://practicum.yandex.ru/reviews'
              className='footer__info_link'
              target='_blank'
              rel='noreferrer'
            >
              Отзывы
            </a>
          </nav>
          <nav className='footer__info_links'>
            <a className='footer__info_link footer__info_link-desctop' href='#vacancies'>
              Открытые предложения
            </a>
            <a className='footer__info_link footer__info_link-mobile' href='#vacancies'>
              Предложения
            </a>
            <a href='https://yandex.ru/legal/practicum_termsofuse/' className='footer__info_link'>
              Правовая помощь
            </a>
            <a
              href='https://practicum.yandex.ru/employment/#comics-section'
              className='footer__info_link'
              target='_blank'
              rel='noreferrer'
            >
              Для работодателей
            </a>
          </nav>
        </div>
        <div className='footer__copyright'>
          <p className='footer__copyright_text'>
            Информация на данной странице описывает возможные варианты получения дополнительного дохода в месяц (т.н.
            подработка). Не является предложением о работе. Размещенные объявления о потребности в тех или иных услугах
            не являются вакансиями.
          </p>
          <p className='footer__copyright_text'>
            Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это{' '}
            <a
              href='https://academy.yandex.ru/dataschool/'
              className='footer__copyright_text-ref'
              target='_blank'
              rel='noreferrer'
            >
              Школа анализа данных
            </a>
            , основанная Яндексом и оказывающая образовательные услуги на основании{' '}
            <a
              href='https://code.s3.yandex.net/License%20YSDA.pdf'
              className='footer__copyright_text-ref'
              target='_blank'
              rel='noreferrer'
            >
              Лицензии № 036031
            </a>{' '}
            от 24 марта 2015 года.
          </p>
          <p className='footer__copyright_text'>
            Сертификат о прохождении обучения по программе дополнительного профессионального образования также выдается
            АНО ДПО «ШАД».
          </p>
          <p className='footer__copyright_copy'>©{new Date().getFullYear()} АНО ДПО «ШАД», ООО «Яндекс»</p>
        </div>
        <div className='footer__subscribe'>
          <img src={logo} className='footer__subscribe_logo' alt='Лого Яндекс Практикум'></img>
          <img src={logoMobile} className='footer__subscribe_logoMobile' alt='Лого Яндекс Практикум'></img>
          <p className='footer__subscribe_text'>
            Подпишитесь на наш канал в Telegram, чтобы узнавать о новых вакансиях.
          </p>
          <form action='https://t.me/practicum_experts' target='_blank'>
            <button className='footer__subscribe_button' tabIndex='0'>
              Подписаться на канал
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
