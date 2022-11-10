const { parentPort, workerData } = require('worker_threads');
const { compute } = require('./worker-function');

parentPort.postMessage(compute(workerData));