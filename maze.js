window.onload = function(){
	var win = null;
	var first = true; //first play where you hover to start

	//timer function
	var timer = function(){
		var interval = setInterval(function(){
		    if (win == null){
			    sec++;
			    status.innerHTML = "Time Taken: "+sec+" seconds";
		    }
		    else{
		    	clearInterval(interval);
		    }
		}, 1000);
	};

	var walls = document.querySelectorAll(".boundary");

	var status = document.querySelector("#status");

	var redWalls = function(){
		for(var i=0; i < walls.length; i++){
			if(walls[i].className == "boundary"){
		        walls[i].className += " youlose";
		    }
	    }
	    status.innerHTML = "You Lose! "+ "("+sec+" seconds)";
		win = false;
		first = false;
	};

	for(var i=0; i < walls.length; i++){
		walls[i].onmouseover = function(){
		    if (win != true){ redWalls(); }
		};
	}

	//Exercize 3
	var end = document.querySelector("#end");

	end.onmouseover = function(){
		if(walls[0].className !== "boundary youlose"){
			status.innerHTML = "You Win! "+"("+sec+" seconds)";
			win = true;
			first = false;
		}
	};

	//Exercize 4
	var start = document.querySelector("#start");

	var reset = function(){
		for(var i=0; i < walls.length-1; i++){
			//This ignores boundary example, hence the -1
		    walls[i].className = "boundary";
	    }
	    status.innerHTML = 'Move your mouse over the "S" to begin.';
	    sec = 0;
	    win = null;
	};

	start.onclick = function(){
		reset();
		cheatCheck();
		timer();
	};

	//Exercize 6
	var cheatCheck = function(){
		window.onmousemove = function(event){
		    var maze = document.querySelector("#maze");
		    if((event.clientX < maze.offsetLeft) && win != true){
		        redWalls();
		    }
	    };
	};

	start.onmouseover = function(){
		cheatCheck();
		if(first == true){ timer(); }
	};
};