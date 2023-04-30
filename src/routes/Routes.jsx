import { Children } from "react";
import {
    createBrowserRouter, Navigate,
    
  } from "react-router-dom";
import Category from "../layouts/Category/Category";
import LoginLayouts from "../layouts/LoginLayouts";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/Newslayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import News from "../pages/News/news";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayouts/>
        ,children:[
          {
            path:'/',
            element: <Navigate to='/category/0'></Navigate>
          },
          {
            path:'login',
            element:<Login/>
             
          },
          {
            path:'register',
            element:<Register/>
             
          },

        ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children : [
        
        {
          path:':id',
          element: <Category/>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
        

      ]

    },

    {
      path:'news',
      element: <NewsLayout/>,
      children:[
        {
          path:':id',
          element:<PrivateRoutes>
                      <News/>
          </PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }

  ]);

  export default router ;