import React from 'react';

function Card({id, name, typing, summary, descript}) {
    return (
        <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="pokedex entry" src={require(`../images/${id}.png`)} height="40%" width="40%"></img>
            <div>
                <h2>#{id}: {name}</h2>
                <p>{typing}</p>
                <p>{summary}</p>
            </div>
        </div>
    );
}

export default Card;