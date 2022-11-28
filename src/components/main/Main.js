import Header from '../header/Header'
import Footer from '../footer/Footer'
import First from './first/First'
import Tasks from './tasks/Tasks'
import HowToBecome from './howToBecome/HowToBecome'
import Advantages from './advantages/Advantages'
import ProductIntroduction from './product-introduction/ProductIntroduction'
import Vacancies from './vacancies/Vacancies'
import NoWork from './no-work/NoWork'
import Feedback from './feedback/Feedback'
import WhatAwaitsYou from './whatAwaitsYou/WhatAwaitsYou'

const Main = (props) => {
  return (
    <main className='main'>
      <Header />
      <First />
      <Tasks />
      <HowToBecome />
      <ProductIntroduction />
      <Advantages />
      <WhatAwaitsYou />
      <Vacancies dataBase={props.dataBase} />
      <NoWork />
      <Feedback />
      <Footer />
    </main>
  )
}
export default Main
