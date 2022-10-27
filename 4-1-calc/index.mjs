let nodePath = process.argv[0];
let addPath = process.argv[1];
	
export let firstNum = process.argv[2];
export let secondNum = process.argv[3];

firstNum = Number(firstNum);
secondNum = Number(secondNum);

async function main(){
	try{
		const { add } = await import('./add.mjs');
		add()
	}catch(e){
		console.log('error');
	}
}
main();
