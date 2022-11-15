const { Worker } = require('worker_threads');
const { performance, PerformanceObserver } = require('perf_hooks');

process.env.UV_THREADPOOL_SIZE = 4;

performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
    });
    
}); 

performanceObserver.observe({ entryTypes: ['measure'] });

const secondArray = [];
for(let i = 0; i < 30000000; i++){
    secondArray.push(i);
}

const firstFunction = () => {
    performance.mark('start');
    const firstArray = [];
    for(let i = 0; i < 30000000; i++){
        firstArray.push(i);
    }
    performance.mark('end');
    performance.measure('firstFunction', 'start', 'end');
    return firstArray.map((x) => (Math.random() > 0.5 ? x * 2 : x / 3));
}

const workerFunction = (array) => {
    return new Promise((resolve, reject) => {
        performance.mark('workerStart');

        const newArray = array.slice(0, array.lenght);
        const newArray1 = array.slice(newArray.lenght, newArray.lenght + array.lenght / 4);
        const newArray2 = array .slice(newArray1.lenght, newArray1.lenght + array.lenght / 4);
        const newArray3 = array.slice(newArray2.lenght, newArray2.lenght + array.lenght / 4);

        const worker = new Worker('./worker.js', {
            workerData : { newArray }
        });
        const worker1 = new Worker('./worker.js', {
            workerData : { newArray1 }
        });
        const worker2 = new Worker('./worker.js', {
            workerData : { newArray2 }
        });
        const worker3 = new Worker('./worker.js', {
            workerData : { newArray3 }
        });

        worker.on('message', (msg) => {
            resolve(msg);
        });
        worker1.on('message', (msg) => {
            resolve(msg);
        });
        worker2.on('message', (msg) => {
            resolve(msg);
        });
        worker3.on('message', (msg) => {
            
            resolve(msg);
        });
        performance.mark('workerEnd');
        performance.measure('worker', 'workerStart', 'workerEnd');


    }); 

}

const main = async() => {
    try{
        await firstFunction();
        await workerFunction(secondArray);
    }catch(e){
        console.log(e.message);
    }
}

main();