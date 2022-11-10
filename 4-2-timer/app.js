let nodePath = process.argv[0];
let addPath = process.argv[1];
let timerDurationMinutes = process.argv[2]; //ввод: минуты
let timerDurationSeconds = process.argv[3]; //ввод: секунды

timerDurationMinutes = Number(timerDurationMinutes);
timerDurationMinutes = timerDurationMinutes * 60000;

timerDurationSeconds = Number(timerDurationSeconds);
timerDurationSeconds = timerDurationSeconds * 1000;

let timerDurationFinal = timerDurationMinutes + timerDurationSeconds;

setTimeout(() => {
	console.log('end');
}, timerDurationFinal)
