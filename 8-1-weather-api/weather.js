#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError, printWeather } from './servises/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from './servises/storage.service.js';
import { getWeather, getIcon } from './servises/api.service.js';
import express from 'express';
import { weatherRouter } from './helpers/route.js'
 
const app = express();
const port = 3000;

const saveToken = async (token) => {
	if(!token.length) {
		printError('Не передан токен');
		return;
	}
	try{
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Токен сохранен');
	}catch(e) {
		printError(e.message);
	}
};

const saveCity = async (city) => {
	if(!city.length) {
		printError('Не передан город');
		return;
	}
	try{
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('Город сохранен');
	}catch(e) {
		printError(e.message);
	}
};



const getForcast = async () => {
	try {
		const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
		const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
		app.use('/weather', weatherRouter);
		app.listen(port, () => {
			console.log(`Сервер запущен на http://localhost:${port}`);
		});
	}catch(e){
		if(e?.response?.status == 404){
			printError('Неверно указан город');	
		}else if(e?.response?.status == 401){
			printError('Неверно указан токен');
		}else {
			printError(e.message);
		}

	}
};

const initCLI = () => {
	const args = getArgs(process.argv);
	if(args.h) {
		return printHelp();
	} 
	if(args.s) {
		return saveCity(args.s);
	} 
	if(args.t) {
		return saveToken(args.t);
	}
	return getForcast();
};

initCLI();


	