function preload() {
	world_start = loadSound("world_start.wav");
	Mario_jump = loadSound("jump.wav");
	Mario_coin = loadSound("coin.wav");
	Mario_gameover = loadSound("gameover.wav");
	Mario_kick = loadSound("kick.wav");
	Mario_die= loadSound("mariodie.wav");





	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO );
	video.size(800,400);
	video.parent("gameConsole");
	poseNet=ml5.poseNet(video,carregar);
	poseNet.on("pose",gotPoses);
}
function gotPoses(results) {
   if(results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;

   }
}
function carregar() {
	console.log("carregado");
}
function draw() {
	game()
}






