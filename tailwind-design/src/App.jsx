import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Feature from './components/Feature'
import ImageFeature from './ImageFeature'
import List from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App absolute inset-x-0 top-0">
      <Header/>
      <Hero/>
      <Feature/>
      <ImageFeature/>
      <List/>
    </div>
  )
}

export default App
