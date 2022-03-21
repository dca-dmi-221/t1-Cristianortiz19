class App{
    constructor(){
        this._songs 
        this.loadSongs();
    }
    loadSongs(){
        this._songs = loadSound('/Songs/Slowdive - When the sun hits.mp3');
    }
}