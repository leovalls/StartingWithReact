import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';

import Layout from "./components/Layout"
import Characters from "./components/characters/Characters";
import Movies from "./components/movies/Movies";


const app = document.getElementById('app');

ReactDOM.render(
    <Router>
        <Layout>
            <div>
                <Route path="/movies-list" component={Movies} />
                <Route path="/characters-list/:character?/" component={Characters} />
            </div>
        </Layout>
    </Router>
, app);