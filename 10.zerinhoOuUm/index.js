function solucao(jogadores) {
  let um = [];
  let zero = [];
  
  for (let jogador of jogadores) {
    if (jogador.jogada === 1) {
      um.push(jogador);
    } else {
      zero.push(jogador)
    }
  }

  if (zero.length === 1) {
    console.log(zero[0].nome)
  } else if (um.length === 1) {
    console.log(um[0].nome)
  } else {
    console.log('NINGUEM')
  }
  
}

function processData(input) {
	solucao(JSON.parse(input));
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
