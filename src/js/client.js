import React from "react";
import ReactDOM from "react-dom";
// import {Router, Route, IndexRoute, hashHistory} from "react-router";
// import {IndexRoute, hashHistory} from "react-router";
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

import Layout from "./components/Layout"
import Characters from "./components/characters/Characters";
import Movies from "./components/movies/Movies";


const app = document.getElementById('app');

// ReactDOM.render(<Layout/>, app);
ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Layout} />
            <Route path="/movies-list" component={Movies} />
            <Route path="/characters-list/:character?/" component={Characters} />
        </div>
    </Router>
, app);