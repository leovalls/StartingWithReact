import React from "react";

export default class Characters extends React.Component {

    render() {
        const character =this.props.match.params.character;
        console.log('character', character);
        return ( 
            <div>
                <h2>Characters List</h2>
                <h3>parameter: {character} </h3>
            </div>
        );
    }
}