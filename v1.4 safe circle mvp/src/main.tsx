import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './styles/fonts.css'
import './styles/theme.css'
import { initAnalytics } from './utils/initAnalytics'

// Initialize analytics
if (typeof window !== 'undefined') {
  initAnalytics();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)