const ProductIntroduction = () => {
  return (
    <section className='product-introduction'>
      <h2 className='product-introduction__title font_display'>Яндекс Практикум объединяет</h2>
      <ul className='product-introduction__container'>
        <li className='product-introduction__element'>
          <p className='product-introduction__number font_display'>7</p>
          <p className='product-introduction__text'>Факультетов</p>
        </li>
        <li className='product-introduction__element'>
          <p className='product-introduction__number font_display'>76</p>
          <p className='product-introduction__text'>Курсов</p>
        </li>
        <li className='product-introduction__element'>
          <p className='product-introduction__number font_display'>11000</p>
          <p className='product-introduction__text'>Студентов</p>
        </li>
      </ul>
      <a className='product-introduction__link' href='https://practicum.yandex.ru/'>
        Узнать больше
      </a>
    </section>
  )
}

export default ProductIntroduction
