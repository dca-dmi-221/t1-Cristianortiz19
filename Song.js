class Song{
    constructor({
        name,
        artist,
        genre,
        date,
        duration,
        soundFile
    }){
        this._name = name;
        this._artist = artist;
        this._genre = genre;
        this._date = date;
        this._duration = duration;
        this._soundFile = soundFile;
        this._isPlaying = false;
    }
    playSong(){
        this._soundFile.play();
    }
    stopSong(){
        if(this._soundFile._isPlaying()){
            this._soundFile.stop();
        }
    }
    pauseSong(){
        if(this._soundFile._isPlaying()){
            this._soundFile.pause();
        }
    }
    resumeSong(){
        if(this.soundFile.isPaused()){
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
}