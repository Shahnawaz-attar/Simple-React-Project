import React from 'react'
import web from "../src/Images/3.png"
import { NavLink } from 'react-router-dom';
import Common from "./Common"
const Home = () =>{
    return (
        <>
           <Common name="Welcome to Home Page" imgsrc={web} visit='/service' btname='Get Statart' />
        </>
  
    )
  }
  export default Home;