import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/fonts/Ubuntu-Bold.ttf'
import './assets/fonts/Ubuntu-Medium.ttf'
import './assets/fonts/Ubuntu-Regular.ttf'
import PageContext from './context/PageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageContext>
      <App />
    </PageContext>
    ,
  </React.StrictMode>,
)
