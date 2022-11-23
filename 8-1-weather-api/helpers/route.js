import express from 'express';
import { printWeather } from '../servises/log.service.js';
import { getWeather, getIcon } from '../servises/api.service.js';
import { TOKEN_DICTIONARY, getKeyValue } from '../servises/storage.service.js';


const weatherRouter = express.Router();
weatherRouter.get('/city/:city', async (req, res) => {
	const city = req.params.city;
	const weather = await getWeather(city);
	const a = printWeather(weather, getIcon(weather.weather[0].icon));

	res.send(a);
});
export { weatherRouter };