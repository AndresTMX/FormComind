import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
      <App />
  </React.StrictMode>,
)
