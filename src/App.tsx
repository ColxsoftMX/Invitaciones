import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InvitacionesView from './components/InvitacionesView'

function App() {

  return (
    <>
      <BrowserRouter basename={'/apps'}>
        <Routes>
          <Route path='/invitaciones' element={<InvitacionesView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
