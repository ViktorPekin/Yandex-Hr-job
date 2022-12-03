import { useState } from 'react'
import Main from '../main/Main'
import NoworkPopup from '../main/nowork-popup/NoworkPopup'

const App = () => {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <div className='app'>
      <Main onOpenPopup={setOpenPopup} />
      <NoworkPopup openPopup={openPopup} onOpenPopup={setOpenPopup} />
    </div>
  )
}

export default App
