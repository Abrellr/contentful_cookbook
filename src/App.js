import React from "react";
import { Switch, Route } from "react-router-dom"
import './App.css';

import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer"
import AboutUs from "./AboutUs";
//import dotenv from 'dotenv'


function App() {
  return (
        <div>
          <Header />
          <Banner />
          <Switch>
          <Route component ={Card} path='/:recipeName?' />    
          <Route path="/About" component={AboutUs} />
          <Route exact path="/Home" component={About} />
          </Switch>

          <Footer />

        </div>
        );  
}
export default App;
