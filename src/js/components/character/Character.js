import React from "react";

export default class Character extends React.Component {

    render() {
        const {name, rating, alternative_name, objectID, gender } = this.props;

        return (
            <li>
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">
                        <h3 class="card-title">{name}</h3>
                    </div>

                    <div class="card-body">
                        <div class="card-text">Rating: {rating}</div>
                        <div class="card-text">Alternative name: <strong>{alternative_name}</strong></div>
                        <div class="card-text">Id: {objectID}</div>
                        <div class="card-text">Gender: {gender}</div>
                    </div>
                </div>
            </li>
        );
    }
}
