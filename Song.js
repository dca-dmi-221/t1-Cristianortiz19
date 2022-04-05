class Song{
    constructor({
        name,
        artist,
        genre = '',
        date = '',
        duration = '',
        soundFile,
        imageFile
    }){
        this._name = name;
        this._artist = artist;
        this._genre = genre;
        this._date = date;
        this._duration = duration;
        this._soundFile = soundFile;
        this._isPlaying = false;
        this._imageFile = imageFile;
    }
    playSong(){
        this._soundFile.play();
        this._isPlaying = true;
    }
    stopSong(){
        if(this._soundFile.isPlaying()){
            this._soundFile.stop();
        }
        this._isPlaying = false;
    }
    pauseSong(){
        if(this._soundFile.isPlaying()){
            this._soundFile.pause();
        }else{
            this.playSong();
        }
    }
    get name(){
        return this._name;
    }
    get artist(){
        return this._artist;
    }
    get genre(){
        return this._genre;
    }
    get date(){
        return this._date;
    }
    get duration(){
        return this._duration;
    }
    get soundFile(){
        return this._soundFile;
    }
    get isPlaying(){
        return this._isPlaying;
    }
    get imageFile(){
        return this._imageFile;
    }
}