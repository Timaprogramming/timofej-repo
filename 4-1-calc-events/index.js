const EventEmitter = require("events");
const myEmitter = new EventEmitter();

let nodePath = process.argv[0];
let addPath = process.argv[1];

let firstNum = process.argv[2];
let secondNum = process.argv[3];

firstNum = Number(firstNum);
secondNum = Number(secondNum);

let result = (text) => {
  console.log(text);
};
myEmitter.on("result", result);
myEmitter.on("add", (firstNum, secondNum) => {
  myEmitter.emit("result", firstNum + secondNum);
});

myEmitter.emit("add", firstNum, secondNum);
	
