import React from 'react';

import Shoutout from '../shoutout/Shoutout';
import ShoutoutStore from '../../stores/ShoutoutStore';
import * as ShoutoutActions from '../../actions/ShoutoutActions';

export default class Shoutouts extends React.Component {
    constructor() {
        super();

        this.getShoutoutList = this.getShoutoutList.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            newShoutout: '',
            newName: '',
            shoutoutList: ShoutoutStore.getShoutouts()
        }
    }

    componentWillMount() {
        ShoutoutStore.on('newShoutout', this.getShoutoutList);
    }

    componentWillUnmount() {
        ShoutoutStore.removeListener('newShoutout', this.getShoutoutList);
    }

    createShoutout(event) {
        event.preventDefault();
        
        ShoutoutActions.createShoutout({
            shoutout: this.state.newShoutout,
            name: this.state.newName
        })
    }

    getShoutoutList() {
        this.setState({ shoutoutList: ShoutoutStore.getShoutouts() });
    }

    handleInputChange(event) {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    render() {
        const shoutoutList = this.state.shoutoutList;
        const shoutoutComponets = shoutoutList.map((shoutout) => {
            return <Shoutout key={shoutout.id} {...shoutout} />
        });

        return (
            <div>
                <h2>Shoutouts list</h2>
                <form onSubmit={ this.createShoutout.bind(this) }>
                    <label>Shoutout:
                        <input name="newShoutout" type="text" value={ this.state.newShoutout }
                            onChange={ this.handleInputChange } />
                    </label>
                    <label>Author:
                        <input name="newName" type="text" value={ this.state.newName }
                            onChange={ this.handleInputChange } />
                    </label>
                    <input type="submit" value="Shout it!" />
                </form>
                <ul>{ shoutoutComponets }</ul>
            </div>
        );
    }
}