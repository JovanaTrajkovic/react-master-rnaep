
// PokemonCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokemon.css'; 

const PokemonCard = ({ pokemon, onPokemonClick }) => {
    const [pokemonData, setPokemonData] = useState(null);
  
    useEffect(() => {
      const fetchPokemonData = async () => {
        try {
          const response = await axios.get(pokemon.url);
          setPokemonData(response.data);
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      };
  
      fetchPokemonData();
    }, [pokemon.url]);
  
    const handleViewDetails = () => {
      onPokemonClick(pokemonData);
    };
  
    return (
        <div className="pokemon-card">
        {pokemonData && (
          <div className="pokemon-info">
            <h3 className='pokemon-name'>{pokemon.name}</h3>
            <img src={pokemonData.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
            <div className="button-container">
              <button onClick={handleViewDetails} className="button">View Details</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default PokemonCard;