import React from 'react';
import { createBrowserRouter, Form, RouterProvider,  } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Portfolio from '../Portfolio/Portfolio';
import './App.css';
import Photo from '../Photo/Photo';
import About from '../About/About'


let routers= createBrowserRouter([
  {patth:'/' , element:<Layout/> , children:[
    {path:'/' , element:<Home/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'about' , element:<About/>},

  ]}
])
export default function App() {
  return <RouterProvider router={routers}/>

}
