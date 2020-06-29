import React from 'react';

function SearchBox({ searchfield, searchChange }) {
    return (
        <div>
            <input
            type="search"
            placeholder="Search Pokémon"
            className="pa3 ba b--green bg-lightest-blue"
            onChange={searchChange}>
            </input>
        </div>
    );
}

export default SearchBox;