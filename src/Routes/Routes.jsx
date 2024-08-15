import {
createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Regitration from "../pages/Regitration";
import LogIn from "../pages/LogIn";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/regitration',
            element:<Regitration></Regitration>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        }
      ]
      
    },
  ]);

  export default router