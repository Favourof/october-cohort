import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { TodoApp } from './Pages/TodoApp'


// import Courses from './Courses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter><App/></BrowserRouter>
    {/* <TodoApp/> */}
  </StrictMode>,
)

