import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";

import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import Contact from './Contact';
import HomePage from  './HomePage';
import Navbar from './NavBar.js';
import Cart from './Cart.jsx';


const App = () => {
 
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
      
        <Route path='/' element = {<HomePage />}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/cart' element = {<Cart />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;