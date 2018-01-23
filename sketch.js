var rickyaSlider, jaiana, slider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min,max,defult)
    rickyaSlider= createSlider(0,255,255);
    //.position(x,y)
    rickyaSlider.position(100,200);
    
    jaiana= createSlider(0,255,0);
    jaiana.position(200,100);
    
    slider=createSlider(0,255,0);
    slider.position(300,200);
}

function draw(){
    redValue=rickyaSlider.value();
    greenValue=jaiana.value();
    blueValue=slider.value();
    
    background(redValue,greenValue,blueValue);
}