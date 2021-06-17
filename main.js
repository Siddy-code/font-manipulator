noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(600,180);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet is inititialized');
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX)
console.log("leftWristX= "+leftWristX+", rightWristX= "+rightWristX);
}

}
function draw(){
background('#87CEEB');
document.getElementById("square_side").innerHTML="font size of the text will be = "+difference+"px";
fill('#F90093');
textSize(difference);
text('Sid',noseX,noseY);

}