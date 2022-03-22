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
            case 1:
                this._interface.homepage();
                break;
        }
    }
    isPressed(mx, my){
        switch (this._screen) {
            case 0:
                if(mx > 529 && mx <529 + 222
                    && my > 469 && my <469 + 52){
                        this._screen = 1;
                        console.log("aaaa");
                    }
                break;
            case 1:
                break;
        }
    }
    isDragged(){

    }
    isReleased(){

    }
    get songs(){
        return this._songs;
    }
}