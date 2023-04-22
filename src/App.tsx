import { useState } from 'react'
import './App.css'
import 'antd/dist/reset.css'
import { Index } from './components/pages/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Index />
      
    </div>
  )
}

export default App
