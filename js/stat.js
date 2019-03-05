var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 150;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_TOP_DISTANCE = 80;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_SIDE_DISTANCE = 50;
var TOP_DISTANCE = 260;

var renderCloud = function(ctx, x, y, color) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	x += 420;
	ctx.lineTo(x, y);
	x -= 30;
	y += 135;
	ctx.lineTo(x, y);
	x += 30;
	y += 135;
	ctx.lineTo(x, y);
	x -= 420;
	ctx.lineTo(x, y);
	x += 30;
	y -= 135;
	ctx.lineTo(x, y);
	x -= 30;
	y -= 135;
	ctx.lineTo(x, y);
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}

var getMaxElement = function(arr) {
	var maxElem = arr[0];
	
	if (arr.length == 0) {
		return (0);
	}
	
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElem) {
			maxElem = arr[i];
		}
	}
	
	return (maxElem);
}

var getRandomArbitary = function(min, max) {
	return Math.random() * (max - min) + min;
}

window.renderStatistics = function (ctx, players, times) {
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
	
	var maxTime = getMaxElement (times);
	
	for (var i = 0; i < players.length; i++) {
		ctx.fillStyle = '#000';
		
		ctx.fillText(players[i], CLOUD_X + BAR_SIDE_DISTANCE + (BAR_WIDTH + BAR_SIDE_DISTANCE) * i, TOP_DISTANCE);
		
		ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_SIDE_DISTANCE + (BAR_WIDTH + BAR_SIDE_DISTANCE) * i, BAR_TOP_DISTANCE - GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime));
		
		if (players[i] == 'Вы') {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		} else {
			ctx.fillStyle = 'rgba(0, 0, 255, '+getRandomArbitary(0.1, 1)+')';
		};
		
		ctx.fillRect(CLOUD_X + BAR_SIDE_DISTANCE + (BAR_WIDTH + BAR_SIDE_DISTANCE) * i, BAR_TOP_DISTANCE + BAR_HEIGHT - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
	}
}

































