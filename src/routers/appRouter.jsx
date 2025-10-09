import { createBrowserRouter } from 'react-router'
import App from '../App.jsx'
import Error from '../components/Error.jsx' 
import About from '../components/About.jsx';
import Header from '../components/Header.jsx';
const appRouter =  createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <Error />,
    children: [
        {
        path:"/about",
        element:<About />
        }
    ]
  }, 
  
])

export default appRouter;
