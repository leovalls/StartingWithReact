import { EventEmitter } from 'events';
import  charactersList  from './charactersList.json';

class CharacterStore extends EventEmitter {
    constructor() {
        super();

        this.characters = [...charactersList];
    }

    getCharacters() {
        return this.characters;
    }
}

const caracterStore = new CharacterStore();
export default caracterStore;