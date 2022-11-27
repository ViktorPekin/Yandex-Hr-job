import First from './first/First'
import Tasks from './tasks/Tasks'
import Advantages from './advantages/Advantages'
import ProductIntroduction from './product-introduction/ProductIntroduction'
import Vacancies from './vacancies/Vacancies'

const Main = () => {
  return (
    <main className='main'>
      <First />
      <Tasks />
      <ProductIntroduction />
      <Advantages />
      <Vacancies />
    </main>
  )
}
export default Main
