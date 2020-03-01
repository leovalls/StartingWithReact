import dispatcher from '../dispatcher';

export function createShoutout({ shoutout, name }) {
    dispatcher.dispatch({
        name,
        shoutout,
        type: 'CREATE_SHOUTOUT'
    });
}