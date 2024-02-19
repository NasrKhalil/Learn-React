import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from '../app2.jsx'
import Nasr from './nasr.jsx'
import Mix from '../Mix.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App2/>
    <Nasr/>
    <Mix/>
  </React.StrictMode>,
)
