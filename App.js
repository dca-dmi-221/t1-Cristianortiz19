class App{
    constructor(){
        this._songsFiles = [];
        this._songs = [];
        this.loadSongs();
        this._interface = new Interface();
        this._screen = 2;
        this._playLists = [];
    }
    loadSongs(){
        this._songsFiles[0] = loadSound('/Songs/Slowdive - When the sun hits.mp3');
        this._songsFiles[1] = loadSound('/Songs/Surf Curse - Freaks.mp3')
    }
    playLists(){
        this._songs.push(new Song({
            
        }))
    }
    interface(){
        switch (this._screen) {
            case 0:
                this._interface.welcome();
                break;
            case 1:
                this._interface.homepage();
                break;
            case 2:
                this._interface.playingSong();
                break;
            case 3:
                break;
            case 4:
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
            case 2:

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