import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";
import "@fontsource/markazi-text/400.css";
import "@fontsource/markazi-text/700.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
