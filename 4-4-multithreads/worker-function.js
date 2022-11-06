function compute (array) {
    const functionArray = [];
    for(let i = 0; i < 3000000; i++){
        functionArray.push(i);
    }
    return functionArray.map((x) => (Math.random() > 0.5 ? x * 2 : x / 3));
}

module.exports = { compute };