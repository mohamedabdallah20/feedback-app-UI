import React from 'react'
// import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
