import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './components/post';

const delay = (ms) => {
  console.log("start delay");
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
};

function App() {
  const [loading, setLoading] = useState(false)

  const [count, setCount] = useState(0)

  const handleOnClick = async () => {
    setLoading(true)
    console.log("Lobo");
    await delay(5000)
    setCount((count) => count + 1);
    console.log("tomie")
    setLoading(false)
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleOnClick()}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          vymazat
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          odečíst
        </button>
        <button onClick={() => setCount((count) => count*count + count*count*count)}>
          leporelo 
        </button>
        <p>{loading ? "Loading" : null}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Post/>
    </div>
  )
}

export default App
