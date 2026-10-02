import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AppProvider>,
)
