class Interface{
    constructor(){
        this._Backgrounds = [];
        this.preloadImages();
    }
    preloadImages(){
        this._Backgrounds[1] = loadImage('/Images/Homepage.jpg');
        this._Backgrounds[2] = loadImage('/Images/AllSongs.jpg');
        this._Backgrounds[4] = loadImage('/Images/IsPlaying.jpg');
    }
    welcome(){
        background(240);
        noStroke();
        fill(150);
        rect(529, 469, 222, 52);
    }
    homepage(songArray){
        image(this._Backgrounds[1], 0, 0);
        for (let index = 0; index <4; index++) {
            const song = songArray[index];

            // Info canciones
            fill(0);
            textSize(20);
            text(song.name, 70 + index * 220, 320);
            textSize(16);
            text(song.artist, 70 + index * 220, 340);
            fill(80);
            textSize(14);
            text(song.genre, 70 + index * 220, 380);

            //Boton reproducir canciones
            noStroke();
            fill(150);
            circle(220 + index * 220, 360, 40);
        }
    }
    playing(){

    }
    allSongs(songArray){
        image(this._Backgrounds[2], 0, 0);

        let x = 50;
        let y = 120;
        for (let index = 0; index < songArray.length; index++) {
            const song = songArray[index];
            textAlign(LEFT);
            textSize(16);
            text(song.name, x, y);
            noStroke();
            circle(x + 242, y + 14, 35);
            x += 303;
            if(x > 800){
                x = 50;
                y += 85;
            }
        }
    }
    playingSong(song){
        image(this._Backgrounds[4], 0, 0);

        //Textos
        fill(0);
        textAlign(CENTER);
        textSize(40);
        text(song.name, 640,500);
    }
}