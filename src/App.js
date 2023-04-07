import { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/home/Home'; 
import About from './Components/about/About';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
const routes = createBrowserRouter([
  { path:'', element:<Layout/> , children:[
    { path:'' , element:<Home/>},
    { path:'home' , element:<Home/>},
    { path:'portfolio' , element:<Portfolio/>},
    { path:'about', element:<About/>},
    { path:'contact' , element:<Contact/>}
    


  ]}
])



export class App extends Component{
  state = {}

  render(){
  return <>
  <RouterProvider router ={routes}/>
  
  
</>
  }
}