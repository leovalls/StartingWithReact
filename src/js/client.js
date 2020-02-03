import React from "react";
import ReactDOM from "react-dom";
// import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {IndexRoute, hashHistory} from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from "./components/Layout"
import Characters from "./components/characters/Characters";
import Movies from "./components/movies/Movies";


const app = document.getElementById('app');

// ReactDOM.render(<Layout/>, app);
ReactDOM.render(
    <Router>
        <Route path="/" component={Layout}>
            <Route path="/movies-list">
                <Movies />
            </Route>
            <Route path="/characters-list">
                <Characters/>
            </Route>
        </Route>
    </Router>
, app);