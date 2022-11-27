import First from './first/First'
import Tasks from './tasks/Tasks'
import Advantages from './advantages/Advantages'
import ProductIntroduction from './product-introduction/ProductIntroduction'
import NoWork from './no-work/NoWork'


const Main = () => {
  return (
    <main className='main'>
      <First />
      <Tasks />
      <ProductIntroduction />
      <Advantages />
      <NoWork />
    </main>
  )
}
export default Main
