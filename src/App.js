import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Single from './Pages/Single';
import { Rooms } from './Pages/Rooms';
import { Error } from './Pages/Error';
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
      <>
      <Navbar/> 
      <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/"component={Rooms}/>
      <Route exact path="/rooms/:slug" component={Single}/>
      <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
