import { useState } from 'react'
import './App.css'
import './index.css'
import { Features, Blog, Possibility, Footer, WhatGPT3, Header } from './Containers'
import { CTA, Brand, Navbar} from './Components'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
