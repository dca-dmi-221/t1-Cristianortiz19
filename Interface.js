class Interface{
    constructor(){
        this._Backgrounds = [];
        this.preloadImages();
    }
    preloadImages(){
        this._Backgrounds[1] = loadImage('/Images/Homepage.jpg');
    }
    welcome(){
        background(240);
        noStroke();
        fill(150);
        rect(529, 469, 222, 52);
    }
    homepage(songArray){
        image(this._Backgrounds[1], 0, 0);
        for (let index = 0; index < 4; index++) {
            const song = songArray[index];
            textSize(20);
            text(song.name, 95 + index * 220, 320);
            textSize(16);
            text(song.artist, 95 + index * 220, 340);
            textSize(14);
            text(song.genre, 95 + index * 220, 380);
        }
    }
    playing(){

    }
    playingSong(){
        background(240);
        noStroke();
        fill(150);
        circle(640, 605, 72);
        rect(517, 590, 60, 30);
        rect(703, 590, 60, 30);
    }
}