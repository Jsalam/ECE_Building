
var diskGUI;

function setup(){
	let canvas = createCanvas(400,600);
	canvas.parent('p5Instance');
	diskGUI = new DiskArray (this, createVector(100,50), 7, 20)
}

function draw(){
	// show touches
	document.getElementById('touches').innerHTML = touches.length;
	// change background color
	setBckgnd();
	// display GUI
	fill(0);
	diskGUI.show();
	// draw draw touches
	noFill();
	drawTouches();
	ellipse (mouseX, mouseY, 220, 220);

}

function setBckgnd(){
	switch(touches.length){
		case 0:
		background(255);
		break;
		case 1:
		background(200)
		break;
		case 2:
		background(150)
		break;
		case 3:
		background(100)
		break;
		case 4:
		background(50)
		break;
		case 5:
		background(0)
	}
}

function drawTouches(){
	for (let t of touches){
		noFill();
		ellipse (t.x, t.y, 220, 220);
	}
}
