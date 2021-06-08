let canvas = document.getElementById("myCanvas");
	let context = canvas.getContext("2d");
	let ballRadius = 30;
	let x = canvas.width / 2;
	let y = canvas.height -30; 
	let dx = 2;
	let dy = -2;
	
	function drawBall() {
		context.beginPath();
		context.arc(x,y,30, 0,Math.PI*2);
		context.fillStyle = null;
		context.fill();
		context.closePath();
	}
	
	function draw() {
		context.clearRect(0,0,canvas.width,canvas.height);//この行削除で線描タイプ
		drawBall();
		
		if(x + dx > canvas.width-ballRadius+5 || x + dx < ballRadius-5) {//壁に当たってすこしへこむ感じ
			dx = -dx;
			context.fillStyle = getRandomColor();
		}
		
		if (y + dy > canvas.height-ballRadius+5 || y + dy <ballRadius-5) {
			dy = -dy;
			context.fillStyle = getRandomColor();
		}
		x += dx;
		y += dy;
	  }
	  
	  function getRandomColor() {
	  	let letters = '0123456789ABCDEF'.split('');
	  	let color = '#';
	  	for ( let i = 0; i< 6; i++) {
	  		color += letters[Math.floor(Math.random() *16)];
	  	}
	  	return color;
	  }
	  
	  setInterval(draw,20);    //ボールの速さ調節	  
