var img;

const snowFlakeCount = 500;
const size = 5;
const gravity = 0.5;

var snowFlakes = [];

function preload(){
    img = loadImage('../img/winterscene.jpg')
}

function setup() {
    var canvas = createCanvas(1280, 720);
    canvas.parent("p5container");

   

    for(let i = 0; i < snowFlakeCount ; i++){
    
    snowFlakes.push({
        x: random(width),
        y: random(height)
    });

    console.log(snowFlakes);
}


}

function draw() {

    image(img, 0, 0, width, height);

    noStroke();
    fill(255,255,255);
    
    for(let i = 0; i < snowFlakes.length; i++){
        var snowFlake = snowFlakes[i];
                ellipse(snowFlake.x,snowFlake.y, size);

                if(snowFlake.y > height+size){
                    snowFlake.y =-size
                    }else{
                        snowFlake.y += gravity;
                    
                    }
    }
    

}