import Header from '../header/Header'
import Footer from '../footer/Footer'
import First from './first/First'
import Tasks from './tasks/Tasks'
import HowToBecome from './howToBecome/howToBecome'
import Advantages from './advantages/Advantages'
import Vacancies from './vacancies/Vacancies'
import NoWork from './no-work/NoWork'
import Feedback from './feedback/Feedback'
import WhatAwaitsYou from './whatAwaitsYou/WhatAwaitsYou'
import Practicum from './practicum/Practicum'

const Main = (props) => {
  return (
    <main className='main'>
      {/*<Header />*/}
      <First />
      {/*<Practicum />
      <Tasks />
      <HowToBecome />
      <Advantages />
      <WhatAwaitsYou />
      <Vacancies />
      <NoWork onOpenPopup={props.onOpenPopup} />
      <Feedback />
  <Footer />*/}
    </main>
  )
}
export default Main
