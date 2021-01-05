function setup(){
    createCanvas(1000, 800);
    background(0);
}
function draw(){
    rectMode(CORNERS)
    fill(random(0,255),random(0,255),random(0,255), 40)
    rect(random(0,width),random(0,height),random(0,width),random(0,height))
}