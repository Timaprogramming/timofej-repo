export let firstNum = process.argv[2];
export let func = process.argv[3];
export let secondNum = process.argv[4];

firstNum = Number(firstNum);
secondNum = Number(secondNum);

async function main(){
	if(func == '+'){
		const { add } = await import('./functions.mjs');
		add(firstNum, secondNum);
	}else if(func == '-'){
		const { minus } = await import('./functions.mjs');
		minus(firstNum, secondNum);
	}else if(func == '*'){
		const { multiplication } = await import('./functions.mjs');
		multiplication(firstNum, secondNum);
	}else if(func == '/'){
		const { division } = await import('./functions.mjs');
		division(firstNum, secondNum);
	}
	
}

try{
	main();
} catch(e){
	console.log(`error: ${err.message}`);
}

