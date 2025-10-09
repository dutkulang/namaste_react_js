import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import appRouter from './routers/appRouter'
import { RouterProvider } from 'react-router'
import './index.css'


createRoot(document.getElementById('root')).render(
 <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>
)
