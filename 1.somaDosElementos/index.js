function solucao(lista){
    let soma = 0;
    if(lista.length <= 1000){
        for (let i = 0; i < lista.length; i++){
            soma += lista[i];
        }
        console.log(`${soma}`);
    }else{
        console.log(``);
    }
}

const numeros = [ 1, 2, 3, 4];


function processData(input) {
  	const strings = input.split(" ");
    const numeros = [];
	for(let i = 0; i < strings.length; i++) {
    	  numeros.push(parseInt(strings[i] ,10));
  	}
    solucao(numeros);
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