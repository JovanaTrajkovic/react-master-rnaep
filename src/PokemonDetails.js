// PokemonDetails.js
import React from 'react';
import './PokemonDetails.css'; // Uključivanje CSS datoteke za stilizaciju

const PokemonDetails = ({ pokemon, onClose }) => {
    return (
      <div className="pokemon-details">
        <h2>{pokemon.name}</h2>
        <div className="stats-container blue">
          <p className="stat">Height: {pokemon.height}</p>
          <p className="stat">Weight: {pokemon.weight}</p>
          <p className="stat">Base experience: {pokemon.base_experience}</p>
        </div>
        <div className="types-container red">
    <p>Abilities: {pokemon.abilities.map(ability => <span className="ability" key={ability.ability.name}>{ability.ability.name}</span>).reduce((prev, curr) => [prev, ', ', curr])}</p>
  </div>
        <div className="types-container purple">
        <p className="types">Types: {pokemon.types.map(type => <span className="type" key={type.type.name}>{type.type.name}</span>).reduce((prev, curr) => [prev, ', ', curr])}</p>
        </div>
        <div className="stats-container green">
          <p className="stat">Stats:</p>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="stats-container orange">
          <p className="stat">Moves:</p>
          <ul>
            {pokemon.moves.slice(0, 5).map(move => (
              <li key={move.move.name}>
                {move.move.name}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default PokemonDetails;