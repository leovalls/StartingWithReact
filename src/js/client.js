import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    render() {
        return ( <h2> React on C9 Environment is set up and running! </h2>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render( <Layout/> , app);