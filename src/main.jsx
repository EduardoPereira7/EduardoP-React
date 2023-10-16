import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import PetsListPage from './pages/Pets-List.jsx'
import PetFormCreate from './components/PetFormCreate.jsx'
import PetAddUpdShow from './pages/Pet-AddUpdShow.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "pets",
        element: <PetsListPage />,
        children: [
          {
            path: "pet/:id",
            element: <PetAddUpdShow />,
          }
          
        ]
      },
      {
        path: "/add",
        element: <PetFormCreate />,
      },
    ]
  },
];


const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
