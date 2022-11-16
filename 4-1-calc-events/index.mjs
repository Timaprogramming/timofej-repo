const  { EventEmitter } = await import("events");
export const myEmitter = new EventEmitter();
export let firstNum = process.argv[2];
export let func = process.argv[3];
export let secondNum = process.argv[4];

firstNum = Number(firstNum);
secondNum = Number(secondNum);

const { a } = await import('./functions.mjs');
a();

async function main(){
	if(func == '+'){
		myEmitter.emit("add", (firstNum, secondNum));
	}else if(func == '-'){
		myEmitter.emit("minus", (firstNum, secondNum));
	}else if(func == '*'){
		myEmitter.emit("multiplication", (firstNum, secondNum));
	}else if(func == '/'){
		myEmitter.emit("division", (firstNum, secondNum));
	}
	
}

try{
	main();
} catch(e){
	// console.log(`error: ${err.message}`);
}