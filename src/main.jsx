import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Main from './Components/Main/Main.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
