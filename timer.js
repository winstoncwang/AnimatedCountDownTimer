class Timer {
	constructor(durationInput, startButton, pauseButton, stopButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.stopButton = stopButton;
		//this checks if callbacks are used
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.startButton.addEventListener('click', this.store);
		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
		this.stopButton.addEventListener('click', this.stop);
		this.durationInput.addEventListener('click', this.inputClick);
		this.durationInput.addEventListener('keypress', this.enterStart);
	}

	store = () => {
		if (this.storeOn) {
			this.fullDuration = this.timeRemaining;
			console.log(this.fullDuration);
			this.storeOn = false;
		}
	};

	start = () => {
		if (this.onStart) {
			this.onStart(this.fullDuration);
		}
		this.tick();
		this.startButton.disabled = 'true';
		this.stopButton.disabled = '';
		this.countDownOn = true;
		this.interval = setInterval(this.tick, 50);
	};

	pause = () => {
		clearInterval(this.interval);
		this.startButton.disabled = '';
		this.stopButton.disabled = '';
		this.countDownOn = false;
		this.storeOn = false;
	};

	stop = () => {
		this.pause();
		this.durationInput.value = '0.00';
		this.countDownOn = false;
		this.storeOn = true;
		this.fullDuration = '';
		if (this.onComplete) {
			this.onComplete();
		}
	};

	tick = () => {
		//every second, update the input using DOM
		//option1 grab the input value and update the input element. Disadvantage: to listen for any change in input, additional eventlistener
		//option2 input element stores the value, timer retrieves data everytime
		//option1 stores data in JS
		//option2 stores data in DOM
		if (this.timeRemaining <= 0) {
			this.pause();
			this.storeOn = true;
			this.fullDuration = '';
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.05;
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};

	inputClick = () => {
		this.pause();
		this.storeOn = true;
		this.durationInput.value = '';
	};

	enterStart = (e) => {
		if (e.key === 'Enter' && this.countDownOn === false) {
			this.start();
		} else {
			console.log('timer already running');
			this.fullDuration = parseFloat(this.durationInput.value);
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
}
