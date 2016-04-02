'use strict'

var timeStart;
var time = 0;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var startOn;
var scoreboard = document.getElementById('scoreboard');

function goOn(){
	var timeProceed = new Date();
	var t = timeProceed - timeStart;
	time = t;
	var ms = t % 1000;
	t = (t/1000)>>0;
	var s = t % 60;
	t = (t/60) >> 0;
	var m = t % 60;
	t = (t/60) >> 0;
	var h = t % 24;
	scoreboard.innerHTML = '' + ((h/10)>>0) + (h%10) + ':' + ((m/10)>>0) + (m%10) + ':'
	+ ((s/10)>>0) + (s%10) + ':' + ((ms/100)>>0) + (((ms/10)%10)>>0) + (((ms)%10)>>0);
};

function startWasPressed(){
	startOn = setInterval(goOn, 17);
	timeStart = new Date();
	timeStart = +timeStart - time;
	stop.style.display='block';
	start.style.display='none';
};

function stopWasPressed(){
	clearInterval(startOn);
	start.setAttribute('display', 'block');
	stop.setAttribute('display', 'none');
	stop.style.display='none';
	start.style.display='block';
};

function resetWasPressed(){
	clearInterval(startOn);
	scoreboard.innerHTML = '00:00:00:000';
	stop.style.display='none';
	start.style.display='block';
};
	




start.addEventListener('click', startWasPressed);
stop.addEventListener('click', stopWasPressed);
reset.addEventListener('click', resetWasPressed);







/*function timeToDisplay(){
		console.log('нажат старт');

};*/

/*function goOnReset(){
		resetOn = true;
		console.log('нажат резет');
		console.log(resetOn);

}
*/


/*var timer = {

	timeStart:'',
	timeProceed:'',
	timePaused:0,
	scoreboard:document.getElementById('scoreboard'),
	start:document.getElementById('start'),
	stop:document.getElementById('stop'),
	reset:document.getElementById('reset'),



	goOn:function(){
			timer.timeProceed = new Date();
			var t = timer.timeProceed - timer.timeStart;
			var ms = t % 1000;
			t = (t/1000)>>0;
			var s = t % 60;
			t = (t/60) >> 0;
			var m = t % 60;
			t = (t/60) >> 0;
			var h = t % 24;
			timer.scoreboard.innerHTML = '' + ((h/10)>>0) + (h%10) + ':' + ((m/10)>>0) + (m%10) + ':'
			+ ((s/10)>>0) + (s%10) + ':' + ((ms/100)>>0) + (((ms/10)%10)>>0) + (((ms)%10)>>0);
		},

	timeToDisplay:function(){
		timer.timeStart = new Date();
		setInterval(timer.goOn, 17);
		console.log('нажат старт');

	},

	goOnReset:function(){
		clearInterval(timer.timeToDisplay);
		console.log('нажат резет');
	}

}

//		console.log(timer.goOnReset);

*/