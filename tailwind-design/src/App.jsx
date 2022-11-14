import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Feature from './components/Feature'
import ImageFeature from './components/ImageFeature'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App absolute inset-x-0 top-0 bg-hero-pattern">
      <Header/>
      <Hero/>
      <Feature/>
      <ImageFeature/>
      <List/>
    </div>
  )
}

export default App
