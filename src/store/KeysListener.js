import {makeAutoObservable} from "mobx";

class KeysListener{
    keysList = ['ArrowUp', 'ArrowLeft', 'ArrowRight']
    keys = {}
    posX = 0
    constructor() {
        makeAutoObservable(this)
    }
        actualKeys(keys){
            this.keys = keys
        }
}
export default new KeysListener()