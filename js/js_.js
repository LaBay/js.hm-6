'use strict'

var timer = {

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

	setTimestart:function(){
		this.timeStart = new Date();
	},

	goDisplay:function(){
		setInterval(this.goOn, 17);
		console.log('нажат старт');

	},

	timeToDisplay:function(){
		timer.setTimestart();
		timer.goDisplay();
	},

	goOnReset:function(){
		clearInterval(window.timer.goDisplay);
		timer.timeToDisplay = null;
		console.log('нажат резет');
	}

}

//		console.log(timer.goOnReset);


timer.start.addEventListener('click', timer.timeToDisplay);
timer.reset.addEventListener('click', timer.goOnReset);

