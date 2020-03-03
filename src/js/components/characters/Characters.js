import React from "react";

import Character from '../character/Character'
import CharacterStore from '../../stores/CharacterStore'

export default class Characters extends React.Component {
    constructor() {
        super();

        this.state = {
            characters: CharacterStore.getCharacters()
        };

    }

    render() {
        const {characters} = this.state;
        const charactersList = characters.map((character) => {
            return <Character key={character.objectID} {...character} />
        });        
        
        const styles = {
            'listStyle': 'none',
            'padding': 0
        }

        return ( 
            <div>
                <h2>Characters List</h2>
                <ul style={styles}>
                    {charactersList}
                </ul>
            </div>
        );
    }
}