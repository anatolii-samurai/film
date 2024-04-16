import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./root";
import ErrorPage from "../error-page";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/",
            
        }
      ]
    },
  ]);

  export {router}