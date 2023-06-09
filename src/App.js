import React from 'react'
import {
  About,
  Header,
  Footer,
  Skills,
  Testimonial,
  Work
} from './container/index'
import { Navbar } from './components/index'
import './App.scss'

function App () {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
