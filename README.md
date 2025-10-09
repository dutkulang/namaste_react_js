# Namaste react js frontend

Is a comprehensive and depth knowledge by Akshy at namaste dev

### React Routing

Routing allows page navigation between pages. `/` -> `/settings`, `/profile`

React router dom by remix provides an easy way to do routing in a react component without

reloading/ re-rendering the entire page components.

- Install the react routerdom now called jsut react router

```sh
npm install react-router@latest
```

### **functions provided by the library**

`createBrowserRouter()` - This is the web method recommended for web based applications because it uses browser native API calls.

It takes in an array of js objects that define the path, componenets for each route.

```jsx
// routers/appRouter.jsx

import {createBrowserRouter} from "react-router"


const AppRouter  = createBrowserRouter([
    {   
        // path name
        path:"/",

        // component that will be executed on the path being reached
        element:<MyComponent/>,
        
        // if an invalid path is hit error element will manage it.
        errorElement: <ErrorComponent/>,

        //optional children array of path js objects
        // incase you are implementing a single page site.
        children: [
            {
                // path 1
            },
            {
                // path 2
            },
            {
                // path 3
            },
            {
                // path 4
            }
        ]

    }
])

export default appRouter;

```

- ### RouterProvider component

This is the component that mounts your routers to the actual app. it is provided by the react-router library.

You must allocate the file in which react gets mount into your application, for me that is in src/main.jsx

```jsx
// src/main.jsx
import { StrictMode } from 'react'
import {RouterProvider} from "react-router"
import appRouter from "./routers/appRouter.jsx"

... // other file content

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>
)



```