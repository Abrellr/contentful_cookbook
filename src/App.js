import React from "react";
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import './App.css';
import { client } from "./client";

import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer"
import AboutUs from "./AboutUs";
//import dotenv from 'dotenv'

require('dotenv').config()

function App() {
  return (
    <Router>
        <div>
          <Header />
          <Banner />
            <About/>
            <Switch>

            <Route component ={Card} path='/:recipeName?' />    

          </Switch>  
          <Footer />
        </div>
        </Router>
        );  
}
export default App;
