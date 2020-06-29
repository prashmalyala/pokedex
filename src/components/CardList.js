import React from 'react';
import Card from './Card';

function CardList({pokemon}) {
    return (
        <div>
            {pokemon.map((user, i) => {
                return (<Card
                    key={pokemon[i].id} 
                    id={pokemon[i].id} 
                    name={pokemon[i].name} 
                    typing={pokemon[i].typing} 
                    summary={pokemon[i].summary} 
                    descript={pokemon[i].description} 
                />);
            })}
        </div>
    );
}

export default CardList;