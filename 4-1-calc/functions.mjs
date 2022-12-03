const { firstNum, secondNum } = await import('./index.mjs');

export function add(){
	var result = firstNum + secondNum;	
	console.log(result);
}

export function minus(){
	var result = firstNum - secondNum;
	console.log(result);
}

export function multiplication(){
	var result = firstNum * secondNum;
	console.log(result);
}

export function division(){
	var result = firstNum / secondNum;
	console.log(result);
}