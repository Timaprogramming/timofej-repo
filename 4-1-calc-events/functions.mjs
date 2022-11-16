const  { myEmitter } = await import('./index.mjs');
// const { firstNum, secondNum } = await import('./index.mjs');

export async function a() {
	myEmitter.on("add", (a, b) => {
		var result = a + b;
		console.log(result);
	});
	myEmitter.on("minus", (a, b) => {
		var result = a - b;
		console.log(result);
	});
	myEmitter.on("multiplication", (a, b) => {
		var result = a * b;
		console.log(result);
	});
	myEmitter.on("divisilon", (a, b) => {
		var result = a / b;
		console.log(result);
	});
}