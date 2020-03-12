let scaling;
let scaleSlider;
let ValueSlider;
let accuracy = 0.001;

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	noStroke();
	ValueSlider = createSlider(2000, 500000, 2000, 1000);
	ValueSlider.position(0, 100);
	scaleSlider = createSlider(accuracy, 1, 1, accuracy);
	scaleSlider.position(0, 50);
	textSize(20);
	colorMode(HSB);
}

function draw() 
{
	scaling = scaleSlider.value();
	max = ValueSlider.value();
	background(0, 0, 20);
	fill(0, 0, 100);
	text('Scaling', 30, 50);
	fill(0, 0, 100);
	text('Sort range', 20, 100);
	text(max, 40, 130);
	drawPoint(max);
	
}

function primeNumber(number, val) 
{
	if (number < 2)
		return false;
	if (number == 2)
		return true;
	if (number % val == 0)
		return false;
	if (val * val > number)
		return true;
	return primeNumber(number, val + 1);
}

function drawPoint(max)
{
	let x = width / 2;
	let y = height / 2;
	for (let i = 0; i < max; i++) {
		if (primeNumber(i, 2) == true) {
			let dx = x + (i * cos(i) * scaling);
			let dy = y + (i * sin(i) * scaling);
			let cccc = 179.89 * i / PI;
			while (cccc >= 360)
				cccc -= 360;
			fill(cccc, 100, 100);
			ellipse(dx, dy, 2 + (sqrt(scaling)) * 10);
		}
	}
}