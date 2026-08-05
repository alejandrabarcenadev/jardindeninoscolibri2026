import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import logoHeroFavicon from './imports/logo_hero-1.png'

// Favicon — logo circular del jardín
const linkEl = document.createElement('link')
linkEl.rel = 'icon'
linkEl.type = 'image/png'
linkEl.href = logoHeroFavicon
document.head.appendChild(linkEl)

document.title = 'Jardín de Niños Colibrí'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
