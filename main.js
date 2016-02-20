$(window).load(function(){

	L.mapbox.accessToken = 'pk.eyJ1IjoiYWZlcnJpc3MiLCJhIjoiY2lrajFyYXZ6MDVlbHR5ajdydnF6eXZsaCJ9.LuRXF9qUSObhgrCOZkwAog';
	var map = L.mapbox.map('map', 'mapbox.satellite')
    .setView([34.012014, -118.301788], 12);

    var c = map.getCanvas();
    console.log(c);
    console.log("cc");
	/*
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 19,
    id: 'aferriss.p50fgghf',
    accessToken: 'pk.eyJ1IjoiYWZlcnJpc3MiLCJhIjoiY2lrajFyYXZ6MDVlbHR5ajdydnF6eXZsaCJ9.LuRXF9qUSObhgrCOZkwAog'
	}).addTo(map);
	*/
	/*
	var hue = 0;
	function satAdd(){
		window.requestAnimationFrame(satAdd);
		$("img").css({
			"webkit-filter":"saturate(7.5) hue-rotate("+hue+"deg)"
		});
		hue = Math.floor((hue + 15) % 360);
	}
	*/

	//satAdd();

	/*
	function getImages(){
		var widths = [];
		var heights = [];
		var xPos = [];
		var yPos = [];
		var canvas = document.getElementById("canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var ctx = canvas.getContext('2d');
		var imgs = [];
		//imgs = document.getElementsByTagName('img');
		imgs = $("img");
		console.log(imgs);
		var x = -0;
		var y = -100;
		for(var i =imgs.length-1; i>imgs.length-25; i--){
			// console.log(imgs[i].style);
			ctx.drawImage(imgs[i],imgs[i].x, imgs[i].y, 256, 256);
			
			x+= 256;
			if( x > window.innerWidth+100){
				x = 0;
			}
			console.log(x);
			if( x == 0 && i != 0){
				y+= 256;
			}
			
		}
		
		$("img").each(function(){
			widths.push($(this)[0].clientWidth);
			heights.push($(this)[0].clientHeight);
			xPos.push($(this)[0].x);
			yPos.push($(this)[0].y);
			console.log($(this));
			ctx.drawImage($(this)[0], $(this)[0].x,$(this)[0].y);
			
		});
		console.log(yPos);
		

	}

	getImages();

	$("#canvas").click(function(){
		getImages();
	});
	*/

});

//https://api.mapbox.com/styles/v1/aferriss/cikk58vsq00atbgm12lphxqo9.html?title=true&access_token=pk.eyJ1IjoiYWZlcnJpc3MiLCJhIjoiY2lrajFyYXZ6MDVlbHR5ajdydnF6eXZsaCJ9.LuRXF9qUSObhgrCOZkwAog#15.788463940814536/34.18919993371625/241.38555325573748/0
//mapbox://styles/aferriss/cikk58vsq00atbgm12lphxqo9