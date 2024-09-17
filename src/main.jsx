import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import Register from './Pages/Register/Register.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:'',
      element:<Home/>,
    },
    {
      path:'Register',
      element:<Register/>
    }

  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
)
