import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //llamar las direcciones
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePageScreem from './screens/HomePageScreen'
import ClimAppScreem from './screens/ClimAppScreem'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Container>
          <Routes>
          <Route path ='/' element ={<HomePageScreem/>}/> 
          <Route path = "ClimAppScreem" element={<ClimAppScreem/>}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
