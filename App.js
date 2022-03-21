class App{
    constructor(){
        this._songs = [];
        this.loadSongs();
    }
    loadSongs(){
        this._songs[0] = loadSound('/Songs/Slowdive - When the sun hits.mp3');
    }
    get songs(){
        return this._songs;
    }
}