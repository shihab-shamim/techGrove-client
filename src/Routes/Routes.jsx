import {
createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Regitration from "../pages/Regitration";
import LogIn from "../pages/LogIn";
import Products from "../pages/Products";
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
        },
        {
          path:'/products',
          element:<Products></Products>,
          loader:()=>fetch('http://localhost:5000/productsCount')
        }
      ]
      
    },
  ]);

  export default router