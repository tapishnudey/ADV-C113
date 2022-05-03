    function setup(){
        canvas=createCanvas(500,400);
        canvas.position(70,200);
        video = createCapture(VIDEO);
        video.hide();
        
        }
    
    function draw(){
        
    image(video,100,80,300,250);
    stroke(168,167,168);
    fill(168,10,168);
    
    circle(40,40,55);
    circle(460,40,55);
    circle(40,360,55);
    circle(460,360,55);

    stroke(168,200,200);
    fill(168,20,200);
    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275);
}
function takeSnapshot(){
    save("frame.png");
}

