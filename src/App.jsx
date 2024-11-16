import React from "react";
import "./App.css";
import SignUp from "./components/signUp";
import LogIn from "./components/LogIn";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import CreatePost from "./components/CreatePost";

const brouserRouter=createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      // {
      //   path:'/create',
      //   element:<CreatePost/>
      // }
    ]
  },
  {
    path: '/login',
    element: <LogIn/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
])



const App = () => {
  return (
    <>
      {/* <SignUp/> */}
      <RouterProvider router={brouserRouter} />

      {/* <Feed/> */}
     
    </>

  );
};

export default App;
