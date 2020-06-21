import React from 'react';
import Card from './Card';

function CardList({pokemon}) {
    const cardsArray = pokemon.map((user, i) => {
        return <Card id={pokemon[i].id} name={pokemon[i].name} typing={pokemon[i].typing} summary={pokemon[i].summary} descript={pokemon[i].description} />
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;