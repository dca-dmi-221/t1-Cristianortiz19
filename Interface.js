class Interface{
    constructor(){
        this._Backgrounds = [];
        this._boxes = [];
        this._buttons = [];
        this._songImages = [];
        this.preloadImages();
    }
    preloadImages(){
        this._Backgrounds[0] = loadImage('/Images/Welcome.jpg');
        this._Backgrounds[1] = loadImage('/Images/Homepage.jpg');
        this._Backgrounds[2] = loadImage('/Images/AllSongs.jpg');
        this._Backgrounds[3] = loadImage('/Images/AllPlaylists.jpg');
        this._Backgrounds[4] = loadImage('/Images/IsPlaying.jpg');
        this._boxes[0] = loadImage('/Images/SongFrame.png');
        this._boxes[1] = loadImage('/Images/PlayListFrame.png');
        this._boxes[10] = loadImage('/Images/windowSong.jpg');
        this._boxes[20] = loadImage('/Images/HomeSong1.png');
        this._boxes[21] = loadImage('/Images/HomeSong2.png');
        this._boxes[22] = loadImage('/Images/HomeSong3.png');
        this._boxes[23] = loadImage('/Images/HomeSong4.png');
        this._buttons[0] = loadImage('/Images/PlayButton.png');
        this._buttons[1] = loadImage('/Images/PauseButton.png');
    }
    welcome(){
        image(this._Backgrounds[0], 0, 0);
    }
    homepage(songArray, playListArray){
        image(this._Backgrounds[1], 0, 0);
        for (let index = 0; index <songArray.length; index++) {
            const song = songArray[index];

            if(index <= 3){
                image(this._boxes[0], -155 + index * 220, -10);
                // Info canciones
                textAlign(LEFT);
                fill(255);
                textSize(18);
                text(song.name, 70 + index * 220, 320);
                textSize(14);
                text(song.artist, 70 + index * 220, 340);
                fill(255);
                textSize(14);
                text(song.genre, 70 + index * 220, 380);

                //Boton reproducir canciones
                noStroke();
                fill(150);
                image(this._buttons[0], 200 + index * 220, 340);
                image(this._boxes[index + 20], 55 + 220 * index, 173);
            }
        }
        for (let index = 0; index < playListArray.length; index++) {
            const playList = playListArray[index];
            if(index <= 3){
                image(this._boxes[1], -33 + index * 220, 405);
                //info playlists
                textAlign(LEFT);
                fill(255);
                textSize(18);
                text(playList.name, 70 + index * 220, 630);
            }
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
            fill(255);
            text(song.name, x, y);
            fill(255);
            textSize(14)
            text(song.artist, x, y + 16);
            noStroke();
            fill(100);
            circle(x + 242, y + 14, 35);
            x += 303;
            if(x > 800){
                x = 50;
                y += 85;
            }
        }
    }
    allPlaylists(){
        image(this._Backgrounds[3], 0, 0);
    }
    playingSong(song, arraySong){
        image(this._Backgrounds[4], 0, 0);

        //Textos
        fill(0);
        textAlign(CENTER);
        textSize(40);
        text(song.name, 640,500);

        textSize(20);
        fill(80);
        text(song.artist, 640, 530);

        fill(0, 80);
        rect(70, 50, 40, 30);
        image(song.imageFile, 454, 53);
        for (let index = 0; index < arraySong.length; index++) {
            const song = arraySong[index];
            if(song.soundFile.isPaused() && song.isPlaying === true){
                image(this._buttons[0], 615, 563, 53, 53);
            } else if(song.soundFile.isPlaying()){
                image(this._buttons[1], 615, 563, 53, 53);
            }
        }
    }
    songWindow(playingSong, screen, arraySong){
        if(playingSong !== null && screen !== 0 && screen !== 4){
            image(this._boxes[10], 978, 295);
            image(playingSong.imageFile, 978, 295, 287, 287);
            fill(255);
            textAlign(LEFT);
            textSize(18);
            text(playingSong.name, 1000,620);
            textSize(12);
            text(playingSong.artist, 1000, 640);
            for (let index = 0; index < arraySong.length; index++) {
                const song = arraySong[index];
                if(song.soundFile.isPaused() && song.isPlaying === true){
                    image(this._buttons[0], 1100, 650, 42, 42);
                } else if(song.soundFile.isPlaying()){
                    image(this._buttons[1], 1100, 650, 42, 42);
                }
            }
        }
    }
}