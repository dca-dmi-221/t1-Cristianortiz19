class PlayList{
    constructor({name}){
        this._name = name
        this._sounds = [];
    }

    get sounds(){
        return this._sounds;
    }
    set sounds(sound){
        this._sounds = sound;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
}