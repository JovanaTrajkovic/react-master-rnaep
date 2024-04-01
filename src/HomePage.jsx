import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import './Pokemon.css'; 

function HomePage() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
          setPokemonList(response.data.results);
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handlePokemonClick = (pokemon) => {
      setSelectedPokemon(pokemon);
    };
  
    const handleCloseDetails = () => {
      setSelectedPokemon(null);
    };
  
    return (
      <div className="container"> 
      <h1>My Pokémon App</h1>
      {selectedPokemon ? (
        <PokemonDetails pokemon={selectedPokemon} onClose={handleCloseDetails} />
      ) : (
        <PokemonList pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
      )}
    </div>
    );
  };

export default HomePage
