import {makeAutoObservable} from "mobx";

class PositionCharacters{

    positions = {
        mainCharacter: null,
        npcGrandFa: 330,
        npcMossKnight: 620,
        npcBretta: 800
    }
    constructor() {
        makeAutoObservable(this)
    }
    changeCharacterPosition(pos){
        this.positions.MainCharacter = pos
    }
}
export default new PositionCharacters()