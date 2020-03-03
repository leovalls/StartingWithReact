import React from "react";
import { Link } from "react-router-dom";
import Shoutouts from "./shoutouts/Shoutouts";

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            welcome: 'Welcome to Start Wars Trivia!!',
            nextPage: 'nextPage',
            character: 'Algo'
        };
    }

    render() { 
        const continerStyles = {
            'height': 'fit-content',
            'marginTop': '10px',
            'paddingTop': '10px'
        };

        return ( 
            <div>
                <nav class="navbar bg-primary">
                    <div class="container">
                        <div class="navbar-header">
                            <p class="navbar-brand">React!</p>
                            <div class="btn-group btn-group-toggle">
                                <Link to='/' class="btn btn-secondary" >Home</Link> 
                                <Link to='/movies-list' class="btn btn-secondary" >Movies</Link> 
                                <Link to='/characters-list' class="btn btn-secondary" >Characters</Link>
                            </div>
                        </div>
                        <p class="navbar-brand">A movies trivia</p>
                    </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 jumbotron" style={continerStyles}>
                            <div class="well">{this.props.children}</div>
                        </div>
                        <div class="col-sm-1"></div>
                        <div class="col-sm-5 jumbotron" style={continerStyles}>
                            <div class="well"><Shoutouts /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}