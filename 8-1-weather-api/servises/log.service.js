import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
	let b = dedent`<html>
	<body>
			<br><font color="#ff0000">ОШИБКА: ${error}</font>
			</body>
			</html>
			`
	return b.toUpperCase();
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`
	);
};
const printWeather = (res, icon) => {
	let b = dedent`<html>
	<body>
			<br><font color="#ffb700">ПОГОДА В ГОРОДЕ ${res.name}</font>
			<br>${icon}  ${res.weather[0].description}
			<br>Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
			<br>Влажность: ${res.main.humidity}%
			<br>Скорость ветра: ${res.wind.speed}
			</body>
			</html>
			`
	
	return b.toUpperCase();
};

export { printError, printSuccess, printHelp, printWeather };
