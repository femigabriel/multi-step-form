import { useState } from 'react'
import './App.css'
import 'antd/dist/reset.css'
import { Pages } from './components/pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pages />
    </div>
  )
}

export default App
