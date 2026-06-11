import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import ContactUs from './pages/Contact-us.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/contact-us',
      element: <ContactUs/>
    },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
