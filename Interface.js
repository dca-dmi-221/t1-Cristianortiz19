class Interface{
    constructor(){
        this._Backgrounds = [];
    }
    welcome(){
        background(240);
        noStroke();
        fill(150);
        rect(529, 469, 222, 52);
    }
    homepage(){
        this._Backgrounds[1] = loadImage('/Images/Homepage.jpg');
        Image(this._Backgrounds[1]);
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