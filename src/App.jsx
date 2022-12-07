import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Components/pages/LoginPage'
import MainDasboard from './Components/pages/MainDasboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainDasboard/>} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
