function processData(input) {
    const linhas = input.trim().split("\n")
    const palavraCorreta = linhas[0];
    const senha = linhas[1];
    let contador = [];

    for (let index = 0; index < palavraCorreta.length; index++) {
        for (let item = 0; item < senha.length; item++) {
            if (palavraCorreta[index] === senha[item]) {
                contador.push(senha[item]);
                index++;
            }
        }
    }
    const resposta = contador.join('');

    if (resposta === palavraCorreta) {
        console.log("SIM");
    } else {
        console.log("NAO");
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
