const  { EventEmitter } = await import("events");
export const myEmitter = new EventEmitter();

export async function emitters() {
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
	myEmitter.on("division", (a, b) => {
		var result = a / b;
		console.log(result);
	});
}