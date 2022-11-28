import First from './first/First'
import Tasks from './tasks/Tasks'
import HowToBecome from './howToBecome/howToBecome'
import Advantages from './advantages/Advantages'
import ProductIntroduction from './product-introduction/ProductIntroduction'
import Vacancies from './vacancies/Vacancies'
import NoWork from './no-work/NoWork'
import Feedback from './feedback/Feedback'

const Main = () => {
  return (
    <main className='main'>
      <First />
      <Tasks />
      <HowToBecome />
      <ProductIntroduction />
      <Advantages />
      <Vacancies />
      <NoWork />
      <Feedback />
    </main>
  )
}
export default Main
