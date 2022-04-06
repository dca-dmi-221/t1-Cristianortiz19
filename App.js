class App{
    constructor(){
        this._songsFiles = [];
        this._imageFiles = [];
        this._songs = [];
        this.loadSongFiles();
        this.loadImageFiles();
        this._interface = new Interface();
        this._screen = 0;
        this._playLists = [];
        this.songDates();
        this._playingSong = null;
        this.createPlayLists();
        this._volumeSlider = 990;
        this._loadingSlider = 280;
        const input = document.querySelector('#load-song');

        input.addEventListener('change', () => {
            const url = URL.createObjectURL(input.files[0]);
            const sound = loadSound(url, () => {
                const name = window.prompt("Type the song name") || "";
                const artist = window.prompt("Type the artist song") || "";
                this._songs.push(new Song({soundFile: sound, name: name, artist: artist}))
            })
        })
    }
    loadSongFiles(){
        this._songsFiles[0] = loadSound('/Songs/Slowdive - When the sun hits.mp3');
        this._songsFiles[1] = loadSound('/Songs/Surf Curse - Freaks.mp3');
        this._songsFiles[2] = loadSound('/Songs/The Drums - Money.mp3');
        this._songsFiles[3] = loadSound('/Songs/Fahrradsattel.mp3');
        this._songsFiles[4] = loadSound('/Songs/Pantysito.mp3');
        this._songsFiles[5] = loadSound('/Songs/I Think I Like It.mp3');
        this._songsFiles[6] = loadSound('/Songs/Lady.mp3');
        this._songsFiles[7] = loadSound('/Songs/Chandelier.mp3');
        this._songsFiles[8] = loadSound('/Songs/Demasiadas Mujeres.mp3');
        this._songsFiles[9] = loadSound('/Songs/Jugaste y Sufri.mp3');
        this._songsFiles[10] = loadSound('/Songs/METALLICA.mp3');
        this._songsFiles[11] = loadSound('/Songs/Softcore.mp3');
        this._songsFiles[12] = loadSound('/Songs/Sudno.mp3');
        this._songsFiles[13] = loadSound('/Songs/The Less I Know The Better.mp3');
        this._songsFiles[14] = loadSound('/Songs/High Enough.mp3');
    }
    loadImageFiles(){
        this._imageFiles[0] = loadImage('/Images/image1.jpg');
        this._imageFiles[1] = loadImage('/Images/image2.jpg');
        this._imageFiles[2] = loadImage('/Images/image3.jpg');
        this._imageFiles[3] = loadImage('/Images/image4.jpg');
        this._imageFiles[4] = loadImage('/Images/image5.jpg');
        this._imageFiles[5] = loadImage('/Images/image6.jpg');
        this._imageFiles[6] = loadImage('/Images/image7.jpg');
        this._imageFiles[7] = loadImage('/Images/image8.jpg');
        this._imageFiles[8] = loadImage('/Images/image9.jpg');
        this._imageFiles[9] = loadImage('/Images/image10.jpg');
        this._imageFiles[10] = loadImage('/Images/image11.jpg');
        this._imageFiles[11] = loadImage('/Images/image12.jpg');
        this._imageFiles[12] = loadImage('/Images/image13.jpg');
        this._imageFiles[13] = loadImage('/Images/image14.jpg');
        this._imageFiles[14] = loadImage('/Images/image15.jpg');
    }
    songDates(){
        this._songs.push(new Song({
            name: 'When the sun hits',
            artist: 'Slowdive',
            genre: 'Alternative',
            date: '1993',
            duration: '285',
            soundFile: this._songsFiles[0],
            imageFile: this._imageFiles[0]
        }));
        this._songs.push(new Song({
            name: 'Freaks',
            artist: 'Surf Curse',
            genre: 'Alternative',
            date: '2013',
            duration: '147',
            soundFile: this._songsFiles[1],
            imageFile: this._imageFiles[1]
        }));
        this._songs.push(new Song({
            name: 'Money',
            artist: 'The Drums',
            genre: 'Rock',
            date: '2011',
            duration: '236',
            soundFile: this._songsFiles[2],
            imageFile: this._imageFiles[2]
        }));
        this._songs.push(new Song({
            name: 'Fahrradsattel',
            artist: 'Pissel',
            genre: 'Rock',
            date: '2021',
            duration: '110',
            soundFile: this._songsFiles[3],
            imageFile: this._imageFiles[3]
        }));
        this._songs.push(new Song({
            name: 'Pantysito',
            artist: 'Feid, Alejo & Robi',
            genre: 'Reggaeton',
            date: '2022',
            duration: '237',
            soundFile: this._songsFiles[4],
            imageFile: this._imageFiles[4]
        }));
        this._songs.push(new Song({
            name: 'I think I Like It',
            artist: 'Fake Blood',
            genre: 'Electronic',
            date: '2015',
            duration: '335',
            soundFile: this._songsFiles[5],
            imageFile: this._imageFiles[5]
        }));
        this._songs.push(new Song({
            name: 'Lady (Hear Me Tonight)',
            artist: 'Modjo',
            genre: 'Disco',
            date: '2000',
            duration: '221',
            soundFile: this._songsFiles[6],
            imageFile: this._imageFiles[6]
        }));
        this._songs.push(new Song({
            name: 'Chandelier',
            artist: 'Will Paquin',
            genre: 'Alternative/independent',
            date: '2021',
            duration: '129',
            soundFile: this._songsFiles[7],
            imageFile: this._imageFiles[7]
        }));
        this._songs.push(new Song({
            name: 'Demasiadas mujeres',
            artist: 'C. Tangana',
            genre: 'Latin Urban, R&B alternative',
            date: '2021',
            duration: '167',
            soundFile: this._songsFiles[8],
            imageFile: this._imageFiles[8]
        }));
        this._songs.push(new Song({
            name: 'Jugaste Y Sufrí',
            artist: 'Eslabón Armado',
            genre: 'Corridos Tumbados',
            date: '2020',
            duration: '275',
            soundFile: this._songsFiles[9],
            imageFile: this._imageFiles[9]
        }));
        this._songs.push(new Song({
            name: 'METALLICA',
            artist: 'Yung Beef',
            genre: 'Trap',
            date: '2021',
            duration: '225',
            soundFile: this._songsFiles[10],
            imageFile: this._imageFiles[10]
        }));
        this._songs.push(new Song({
            name: 'Softcore',
            artist: 'The Neighbourhood',
            genre: 'Alternative',
            date: '2018',
            duration: '210',
            soundFile: this._songsFiles[11],
            imageFile: this._imageFiles[11]
        }));
        this._songs.push(new Song({
            name: 'Sudno',
            artist: 'Molchat Doma',
            genre: 'Post Punk',
            date: '2018',
            duration: '145',
            soundFile: this._songsFiles[12],
            imageFile: this._imageFiles[12]
        }));
        this._songs.push(new Song({
            name: 'The Less I know The Better',
            artist: 'Tame Impala',
            genre: 'Alternative',
            date: '2015',
            duration: '227',
            soundFile: this._songsFiles[13],
            imageFile: this._imageFiles[13]
        }));
        this._songs.push(new Song({
            name: 'High Enough',
            artist: 'K.Flay',
            genre: 'Indie Rock',
            date: '2017',
            duration: '290',
            soundFile: this._songsFiles[14],
            imageFile: this._imageFiles[14]
        }));
    }
    createPlayLists(){
        this._playLists.push(new PlayList({name: 'Independent Music'}));
        this._playLists[0].sounds.push(this._songs[1]);
        this._playLists[0].sounds.push(this._songs[2]);
        this._playLists[0].sounds.push(this._songs[3]);
        this._playLists[0].sounds.push(this._songs[12]);
        this._playLists[0].sounds.push(this._songs[14]);

        this._playLists.push(new PlayList({name: 'Spanish Music'}));
        this._playLists[1].sounds.push(this._songs[4]);
        this._playLists[1].sounds.push(this._songs[8]);
        this._playLists[1].sounds.push(this._songs[9]);
        this._playLists[1].sounds.push(this._songs[10]);

        this._playLists.push(new PlayList({name: 'Best of Indie 2022'}));
        this._playLists[2].sounds.push(this._songs[0]);
        this._playLists[2].sounds.push(this._songs[5]);
        this._playLists[2].sounds.push(this._songs[6]);
        this._playLists[2].sounds.push(this._songs[7]);
        this._playLists[2].sounds.push(this._songs[13]);
        this._playLists[2].sounds.push(this._songs[11]);

        console.log(this._playLists);
        
    }
    interface(){
        switch (this._screen) {
            case 0:
                this._interface.welcome();
                break;
            case 1:
                this._interface.homepage(this._songs, this._playLists);
                break;
            case 2:
                this._interface.allSongs(this._songs);
                break;
            case 3:
                this._interface.allPlaylists(this._playLists);
                break;
            case 4:
                this._interface.playingSong(this._playingSong, this._songs);
                fill(114, 204, 255);
                rect(873, 587, this._volumeSlider - 873, 8);
                fill(255)
                circle(this._volumeSlider, 591, 15);
                
                for (let index = 0; index < this._songs.length; index++) {
                    const song = this._songs[index];
                    if(song.isPlaying === true){
                        const loading = map(this._songs[index].soundFile.currentTime(), 0, this._songs[index].soundFile.duration(), 280, 990);
                        this._loadingSlider = loading;
                        fill(243, 68, 231);
                        rect(284, 630, this._loadingSlider - 280, 8);
                        fill(255);
                        circle(this._loadingSlider, 634, 15);
                    }
                }
                break;
        }//if(cancion.currentTime() == cancion.duration())
        this._interface.songWindow(this._playingSong, this._screen, this._songs);
        for (let index = 0; index < this._songs.length; index++) {
            const song = this._songs[index];
            if(song.soundFile.isPlaying()){
                if(this._songs[index].soundFile.currentTime() > this._songs[index].soundFile.duration() - 2){
                    this._songs[index].stopSong();
                    index += 1;
                    this._songs[index].playSong();
                    this._playingSong = this._songs[index];
                }
                
            }
        }
    }
    /*playing(){
        if(this._playingSong !== null){
            if(this._playingSong.soundFile.isPlaying()){
                this._playingSong.soundFile.pause();
            } else {
                this._playingSong.soundFile.play();
            }
            return false;
        }
    }*/
    isPressed(mx, my, song){
        switch (this._screen) {
            case 0:
                if(mx > 529 && mx <529 + 222
                    && my > 540 && my <540 + 52){
                        this._screen = 1;
                    }
                break;
            case 1:
                for (let index = 0; index < song.length; index++) {
                    const songs = song[index];
                    if(index < 4){
                        let xItem = 220 + (index * 220);
                        let yItem = 360;
                        let sizeItem = 40;
                        if(dist(mx, my, xItem, yItem)<sizeItem/2){
                            if(songs.soundFile.isPlaying()){
                                songs.stopSong();
                            }
                            song[index].playSong();
                            this._playingSong = song[index];
                            this._screen = 4;
                        }
                    }
                }
                console.log(this._playingSong);
                if(mx > 845 && mx <845 + 80
                    && my > 135 && my <135 + 25){
                    this._screen = 2;
                }
                if(mx > 845 && mx <845 + 80
                    && my > 445 && my <445 + 25){
                    this._screen = 3;
                }
                break;
            case 2:
                let x = 50;
                let y = 120;
                for (let index = 0; index < song.length; index++) {
                    const songs = song[index];
                    if(dist(mx, my, x + 242, y + 14) < 35){
                        songs.playSong();
                        this._playingSong = songs;
                        this._screen = 4;
                    }
                    x += 303;
                    if(x > 800){
                        x = 50;
                        y += 85;
                    }
                }
                //Volver
                if(mx > 30 && mx < 30 + 40 &&
                    my > 40 && my < 40 + 30){
                        this._screen = 1;
                    }
                break;
            case 3:
                let x1 = 50;
                let y1 = 120
                for (let index = 0; index < this._playLists.length; index++) {
                    if(dist(mx, my, x1 + 242, y1 + 14) < 35){
                        this._playLists[index].sounds[0].playSong();
                        this._playingSong = this._playLists[index].sounds[0]
                        this._screen = 4;
                        console.log(this._playLists[index])
                    }
                    x1 += 303;
                    if(x1 > 800){
                        x1 = 50;
                        y1 += 85;
                    }
                }
                //Volver
                if(mx > 30 && mx < 30 + 40 &&
                    my > 40 && my < 40 + 30){
                        this._screen = 1;
                    }
                break;
            case 4:
                // Volver
                if(mx > 50 && mx < 50 + 50 &&
                    my > 40 && my < 40 + 40){
                        this._screen = 1;
                    }
                for (let index = 0; index < song.length; index++) {
                    const songs = song[index];
                    if(dist(mx, my, 640, 590) < 55/2 && songs.isPlaying === true){
                        songs.pauseSong();
                    }
                    //Canción anterior
                    if(mx > 688 && mx < 688 + 45 &&
                        my > 580 && my < 580 + 22){
                            
                        //Siguiente canción
                        if(songs.soundFile.isPlaying()){
                            if(index <= song.length){
                                song[index].stopSong();
                                index += 1;
                                song[index].playSong();
                                this._playingSong = song[index];
                            }
                        }
                    }
                    //Canción posterior
                    if(mx > 550 && mx < 550 + 45 &&
                        my > 580 && my < 580 + 22){
                        if(songs.soundFile.isPlaying()){
                            if(index > 0){
                                song[index].stopSong();
                                index -= 1;
                                song[index].playSong();
                                this._playingSong = song[index];
                            }
                    }
                        }
                }
                break;
        }
        if(this._screen === 1,2,3){
            this.uploadSong(mx, my);
        }
    }
    uploadSong(mx, my){
        if(mx > 1160 && mx <1160 + 90
            && my > 110 && my <110 + 30){
                const input = document.querySelector('#load-song');
                input.click();
            }
    }
    isDragged(mx, my, song){
        switch (this._screen) {
            case 4:
                if(dist(mx, my, this._volumeSlider, 590)<20){
                    if(mx > 870 && mx < 990){
                        this._volumeSlider = mx
                        for (let index = 0; index < song.length; index++) {
                            const songs = song[index];
                            const volume = map(mx, 870, 990, 0,100) / 100;
                            songs.soundFile.setVolume(volume);
                                
                        }
                    }
                }
                if(dist(mx, my, this._loadingSlider, 633)<20){
                    if(mx > 280 && mx < 990){
                        this._loadingSlider = mx
                        for (let index = 0; index < song.length; index++) {
                            const songs = song[index];
                            if(songs.isPlaying === true){
                                const head = map(mouseX, 280,990, 0, song[index].soundFile.duration());
                                song[index].soundFile.jump(head);
                            } 
                        }
                    }
                }
                break;
        
            default:
                break;
        }
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