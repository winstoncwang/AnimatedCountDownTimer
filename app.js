const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
const lapButton = document.querySelector('#lap');
const circle = document.querySelector('circle');

//initialisation
lapButton.disabled = 'true';
stopButton.disabled = 'true';

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, stopButton, lapButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', -((duration - timeRemaining) / duration * perimeter));
	},
	onComplete() {
		console.log('Timer is completed');
		circle.setAttribute('stroke-dashoffset', perimeter);
		writeFullDuration = true;
	}
});
