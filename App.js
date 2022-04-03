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
        this.createPlayLists();
    }
    loadFileSongs(){
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
        this._songs.push(new Song({
            name: 'Pantysito',
            artist: 'Feid, Alejo & Robi',
            genre: 'Reggaeton',
            date: '2022',
            duration: '237',
            soundFile: this._songsFiles[4]
        }));
        this._songs.push(new Song({
            name: 'I think I Like It',
            artist: 'Fake Blood',
            genre: 'Electronic',
            date: '2015',
            duration: '335',
            soundFile: this._songsFiles[5]
        }));
        this._songs.push(new Song({
            name: 'Lady (Hear Me Tonight)',
            artist: 'Modjo',
            genre: 'Disco',
            date: '2000',
            duration: '221',
            soundFile: this._songsFiles[6]
        }));
        this._songs.push(new Song({
            name: 'Chandelier',
            artist: 'Will Paquin',
            genre: 'Alternative/independent',
            date: '2021',
            duration: '129',
            soundFile: this._songsFiles[7]
        }));
        this._songs.push(new Song({
            name: 'Demasiadas mujeres',
            artist: 'C. Tangana',
            genre: 'Latin Urban, R&B alternative',
            date: '2021',
            duration: '167',
            soundFile: this._songsFiles[8]
        }));
        this._songs.push(new Song({
            name: 'Jugaste Y Sufrí',
            artist: 'Eslabón Armado',
            genre: 'Corridos Tumbados',
            date: '2020',
            duration: '275',
            soundFile: this._songsFiles[9]
        }));
        this._songs.push(new Song({
            name: 'METALLICA',
            artist: 'Yung Beef',
            genre: 'Trap',
            date: '2021',
            duration: '225',
            soundFile: this._songsFiles[10]
        }));
        this._songs.push(new Song({
            name: 'Softcore',
            artist: 'The Neighbourhood',
            genre: 'Alternative',
            date: '2018',
            duration: '210',
            soundFile: this._songsFiles[11]
        }));
        this._songs.push(new Song({
            name: 'Sudno',
            artist: 'Molchat Doma',
            genre: 'Post Punk',
            date: '2018',
            duration: '145',
            soundFile: this._songsFiles[12]
        }));
        this._songs.push(new Song({
            name: 'The Less I know The Better',
            artist: 'Tame Impala',
            genre: 'Alternative',
            date: '2015',
            duration: '227',
            soundFile: this._songsFiles[13]
        }));
        this._songs.push(new Song({
            name: 'High Enough',
            artist: 'K.Flay',
            genre: 'Indie Rock',
            date: '2017',
            duration: '290',
            soundFile: this._songsFiles[14]
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
                background(0);
                break;
            case 4:
                this._interface.playingSong(this._playingSong);
                break;
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
                    && my > 469 && my <469 + 52){
                        this._screen = 1;
                    }
                break;
            case 1:
                for (let index = 0; index < 4; index++) {
                    let xItem = 220 + (index * 220);
                    let yItem = 360;
                    let sizeItem = 40;
                    if(dist(mx, my, xItem, yItem)<sizeItem/2){
                        this._playingSong = song[index];
                        song[index].playSong();
                        this._screen = 4;
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
                console.log(this._playingSong);
                break;
            case 3:

                break;
            case 4:
                if(mx > 50 && mx < 50 + 50 &&
                    my > 40 && my < 40 + 40){
                        this._screen = 1;
                    }
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