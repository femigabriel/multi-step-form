import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/fonts/Ubuntu-Bold.ttf'
import './assets/fonts/Ubuntu-Medium.ttf'
import './assets/fonts/Ubuntu-Regular.ttf'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
