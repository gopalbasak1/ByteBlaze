import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './Pages/Blogs/Blogs';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
