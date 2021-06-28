import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'

function App() {

  const router = useRoutes()

  return (
    <BrowserRouter>
      <div className="app">
        { router }
      </div>
    </BrowserRouter>
  )
}

export default App
