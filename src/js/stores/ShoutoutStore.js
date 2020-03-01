import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ShoutoutStore extends EventEmitter {
    constructor() {
        super();

        this.shoutouts = [
            {
                id: 1,
                shoutout: 'My first shoutout',
                name: 'PepeTrueno'
            },
            {
                id: 2,
                shoutout: 'My second shoutout',
                name: 'PepeTrueno'
            }
        ];
    }

    actionListener(action) {
        switch(action.type) {
            case 'CREATE_SHOUTOUT': {
                this.createShoutout(action);
            }
        }
    }

    createShoutout({shoutout, name}) {
        const id = Date.now().toString();
        this.shoutouts.push({id, shoutout, name});
        this.emit('newShoutout');
    }

    getShoutouts() {
        return this.shoutouts;
    };
}

const shoutoutStore = new ShoutoutStore();
dispatcher.register(shoutoutStore.actionListener.bind(shoutoutStore));

export default shoutoutStore;
