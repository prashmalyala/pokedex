import React, { Component } from 'react';
import CardList from '../components/CardList';
import { pokemon } from './pokemon';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: pokemon,
            searchfield: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }
    render() {
        const { pokemon, searchfield} = this.state;
        const filteredPokemon = pokemon.filter(onePokemon => {
            return onePokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">Kanto Pokédex</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList pokemon={filteredPokemon} />
                </Scroll>
            </div>
        );
    }
}

export default App;