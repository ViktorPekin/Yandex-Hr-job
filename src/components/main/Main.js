import First from './first/First'
import Tasks from './tasks/Tasks'
import Advantages from './advantages/Advantages'
import ProductIntroduction from './product-introduction/ProductIntroduction'
import NoWork from './no-work/NoWork'
import Feedback from './feedback/Feedback'


const Main = () => {
  return (
    <main className='main'>
      <First />
      <Tasks />
      <ProductIntroduction />
      <Advantages />
      <NoWork />
      <Feedback />
    </main>
  )
}
export default Main
