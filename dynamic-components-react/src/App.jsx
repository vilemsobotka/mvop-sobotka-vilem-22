import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import ModifyButton from './components/ModifyButton'

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <div className='flex '>
        <ModifyButton label="add" handle={() => setCount(cards.push(<Card index={cards.length + 1} key={cards.length + 1}/>))} />
        <ModifyButton label="remove" handle={() => setCount(cards.pop())} />
      </div>
      <div className='flex'>
        {cards.map((card) => { return (card) })}
      </div>
    </div>
  )
}

export default App
