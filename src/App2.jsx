import React, { useState, version } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React {version}!</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>the count is: {count}</button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
