import React from "react";
import { Link } from "react-router-dom";

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            welcome: 'Welcome to Start Wars Trivia!!',
        };
    }

    render() {
        return ( 
            <div>
                <Link to="movies-list">Movies</Link> | <Link to="characters-list">characters</Link>
                <h1>{ this.state.welcome }</h1>
                {this.props.children}
            </div>
        );
    }
}