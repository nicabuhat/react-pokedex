import React from 'react';
import Image from './Image';
import Name from './Name';
import Type from './Type';
import Experience from './Experience';

function PokeCard({ pokemon }) {
    return (
        <div className="pokecard">
            <Image img={pokemon.id} name={pokemon.name} />
            <Name name={pokemon.name} />
            <Type type={pokemon.type} />
            <Experience exp={pokemon.base_experience} />
        </div>
    );
}

export default PokeCard;
