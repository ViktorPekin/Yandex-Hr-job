import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../main/Main'
import VacancyInfo from '../vacancy-info/VacancyInfo'
import NotFound from '../not-found/NotFound'
import data from '../../utils/bd-mentor.json'

const App = () => {
  const [dataBase, setDataBase] = useState([])
  const [selectedDataBase, setSelectorDadaBase] = useState([])
  useEffect(() => {
    setDataBase(data)
  }, [])

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Main dataBase={dataBase} onSelectorDataBase={setSelectorDadaBase} />} />
        <Route path='/vacancy' element={<VacancyInfo selectedDataBase={selectedDataBase} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
