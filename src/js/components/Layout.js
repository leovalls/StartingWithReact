import React from "react";

import Movies from "./movies/Movies"
import Character from "./characters/Characters"

export default class Layout extends React.Component {
    render() {
        return ( 
            <div>
                <Movies/>
                <Character/>    
            </div>
        );
    }
}