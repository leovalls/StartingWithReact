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
        return ( 
            <div>
                <nav class="navbar navbar-default bg-primary">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <p class="navbar-brand">React!</p>
                            <Link to='/' class="btn btn-primary navbar-btn" >Home</Link> 
                            <Link to='/movies-list' class="btn btn-primary navbar-btn" >Movies</Link> 
                            <Link to='/characters-list' class="btn btn-primary navbar-btn" >Characters</Link>
                        </div>
                        <p class="navbar-brand">A movies trivia</p>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-sm-6 jumbotron">
                        <div class="well">{this.props.children}</div>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4 jumbotron">
                        <div class="well"><Shoutouts /></div>
                    </div>
                </div>
            </div>
        );
    }
}