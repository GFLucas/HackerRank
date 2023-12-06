function processData(input) {
    let resposta;
    if (input[0] === input[0].toLowerCase() && input.substr(1) === input.substr(1).toUpperCase()) {
        resposta = input[0].toUpperCase() + input.substr(1).toLowerCase();
        console.log(resposta)
    } else if (input === input.toLowerCase()) {
        resposta = input.toLowerCase();
        console.log(resposta)
    } else if (input === input.toUpperCase()) {
        resposta = input.toLowerCase();
        console.log(resposta)
    } else {
        for (let index = 0; index < input.length; index++) {
            if (input[index].toLowerCase()) {
                input[index].toUpperCase()
            } else {
                input[index].toLowerCase()
            }
        }
        console.log(input)
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});