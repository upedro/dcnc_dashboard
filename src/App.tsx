import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import LoginScreen from './pages/Login'


import { AuthProvider } from './auth'
import { ProtectedLayout } from './components/ProtectedLayout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route  path='/' element={
          <ProtectedLayout>
            <Home/>
          </ProtectedLayout>
        }></Route>
          <Route path='/login' element={<LoginScreen/>}></Route>
        </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
