// VERSION 1
// [] it must have a pokecard
//  [] it must have a name
//  [] it must have an image
//  [] it must have a type
//  [] it must have an experience

import React from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';

function Pokedex({ pokeList }) {
    return (
        <div className="pokedex">
            {pokeList.map((pokemon) => (
                <PokeCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
    );
}

export default Pokedex;
