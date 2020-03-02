import React from "react";

export default class Movie extends React.Component {
    render() {
        const { 
            title,  episode_id, opening_crawl, director, producer, release_date 
        } = this.props;

        return (
            <li>
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">
                        <h3 class="card-title">{title}</h3>
                    </div>
                    <div class="card-body">
                        <div>{opening_crawl}</div>
                    </div>
                    <div class="card-footer  text-muted">
                        <div>Director: {director}</div>
                        <div>Producer: {producer}</div>
                        <div>Release date: {release_date}</div>
                    </div>
                </div>
            </li>
        );
    }
}