import { useEffect, useState } from 'react'

const VacancyInfo = () => {
  const [vacancyInfo, setVacancyInfo] = useState([])

  useEffect(() => {
    let l = localStorage.getItem('VacancyInfo')
    console.log(JSON.parse(l))
    setVacancyInfo(JSON.parse(l))
  }, [])

  return <main className='vacancy-info'></main>
}

export default VacancyInfo
