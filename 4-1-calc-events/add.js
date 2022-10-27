// const EventEmitter = require('events');
// const { firstNum, secondNum } = await import('./index.mjs');

// export function add(){
// 	const myEmmitter = new EventEmitter();
// 	myEmmitter.on('add', (firstNum, secondNum) =>{
// 		myEmmitter.emit('result', firstNum + secondNum);
// 	});

// 	myEmmitter.emit('add');
// 	myEmmitter.on('result');
// }


// async function main(){
// 	try{
// 		const { add } = await import('./add.mjs');
// 		add()
// 	}catch(e){
// 		console.log('error');
// 	}
// }