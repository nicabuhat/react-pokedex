import React from 'react';

function Image({ img, name }) {
    const imgURL = (img) => {
        const url =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
        const paddedNumber = String(img).padStart(3, 0);
        return `${url}${paddedNumber}.png`;
    };

    return <img className="pokecard__img" src={imgURL(img)} alt={name}></img>;
}

export default Image;
