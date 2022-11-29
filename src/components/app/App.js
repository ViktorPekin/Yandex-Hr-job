import { Route, Routes } from 'react-router-dom'
import Main from '../main/Main'
import VacancyInfo from '../vacancy-info/VacancyInfo'
import NotFound from '../not-found/NotFound'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/vacancy' element={<VacancyInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
