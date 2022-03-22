class App{
    constructor(){
        this._songs = [];
        this.loadSongs();
        this._interface = new Interface();
        this._screen = 0;
    }
    loadSongs(){
        this._songs[0] = loadSound('/Songs/Slowdive - When the sun hits.mp3');
        this._songs[1] = loadSound('/Songs/Surf Curse - Freaks.mp3')
    }
    interface(){
        switch (this._screen) {
            case 0:
                this._interface.welcome();
                break;
        }
    }
    get songs(){
        return this._songs;
    }
}