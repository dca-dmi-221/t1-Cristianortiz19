class App{
    constructor(){
        this._songsFiles = [];
        this._songs = [];
        this.loadFileSongs();
        this._interface = new Interface();
        this._screen = 1;
        this._playLists = [];
        this.songDates();
        this._playingSong = null;
    }
    loadFileSongs(){
        this._songsFiles[0] = loadSound('/Songs/Slowdive - When the sun hits.mp3');
        this._songsFiles[1] = loadSound('/Songs/Surf Curse - Freaks.mp3');
        this._songsFiles[2] = loadSound('/Songs/The Drums - Money.mp3');
        this._songsFiles[3] = loadSound('/Songs/Fahrradsattel.mp3');
        
    }
    songDates(){
        this._songs.push(new Song({
            name: 'When the sun hits',
            artist: 'Slowdive',
            genre: 'Alternative',
            date: '1993',
            duration: '285',
            soundFile: this._songsFiles[0]
        }));
        this._songs.push(new Song({
            name: 'Freaks',
            artist: 'Surf Curse',
            genre: 'Alternative',
            date: '2013',
            duration: '147',
            soundFile: this._songsFiles[1]
        }));
        this._songs.push(new Song({
            name: 'Money',
            artist: 'The Drums',
            genre: 'Rock',
            date: '2011',
            duration: '236',
            soundFile: this._songsFiles[2]
        }));
        this._songs.push(new Song({
            name: 'Fahrradsattel',
            artist: 'Pissel',
            genre: 'Rock',
            date: '2021',
            duration: '110',
            soundFile: this._songsFiles[3]
        }));
    }
    interface(){
        switch (this._screen) {
            case 0:
                this._interface.welcome();
                break;
            case 1:
                this._interface.homepage(this._songs);
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
    isPressed(mx, my, song){
        switch (this._screen) {
            case 0:
                if(mx > 529 && mx <529 + 222
                    && my > 469 && my <469 + 52){
                        this._screen = 1;
                        console.log("aaaa");
                    }
                break;
            case 1:
                for (let index = 0; index < 4; index++) {
                    let xItem = 220 + (index * 220);
                    let yItem = 360;
                    let sizeItem = 40;
                    if(dist(mx, my, xItem, yItem)<sizeItem/2){
                        song[index].soundFile.play();
                    }
                }
                break;
            case 2:

                break;
        }
    }
    isDragged(){

    }
    isReleased(){

    }
    get songsFiles(){
        return this._songsFiles;
    }
    get songs(){
        return this._songs;
    }
}