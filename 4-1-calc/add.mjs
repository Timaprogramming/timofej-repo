const { firstNum, secondNum } = await import('./index.mjs');

export function add(){
	var sum = firstNum + secondNum;	
	console.log(sum);
}