
// PokemonList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard'; // Ispravno importovanje komponente PokemonCard
import './Pokemon.css'; 

const PokemonList = ({ pokemonList, onPokemonClick }) => {
  return (
    <div className="pokemon-list">
    <h2>Pokémon List</h2>
    <div className="pokemon-cards">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} onPokemonClick={onPokemonClick} />
      ))}
    </div>
  </div>
  );
};

export default PokemonList;