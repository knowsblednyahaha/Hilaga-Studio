import {Route, Routes} from 'react-router-dom'

import Homepage from "./pages/Homepage"
import Aboutpage from './pages/Aboutpage'
import Workpage from './pages/Workpage'
import Contactpage from './pages/Contactpage'



function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<Aboutpage />} />
      <Route path='/work' element={<Workpage/>} />
      <Route path='/contact' element={<Contactpage/>} />
    </Routes>
  )
}

export default App
