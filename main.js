song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1.loadSound("song1.mp3");
    song2.loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(450,250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}

function modeLoaded(){
    console.log("poseNet is initilized");
}
function draw(){
    image(video,0,0,400,400);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}