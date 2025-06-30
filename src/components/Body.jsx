import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import Login from './Login.jsx';
import Browse from './Browse.jsx';
function body() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])

  
    return (
        <div>
       <RouterProvider router={appRouter}></RouterProvider>
        </div>
       
      
      );
}

export default body;