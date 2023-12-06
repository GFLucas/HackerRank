function solucao(lista) {
    let maiores = [];  
    for (let i = 0; i < lista.length; i++){   
        if (lista[i] >= 18){
            maiores.push(lista[i]);
        };
    };
    if (maiores.length > 0){
        console.log(Math.min(...maiores));
            }else {
        console.log(`CRESCA E APARECA`);
        };
};  

function processData(input) {
    //Enter your code here
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
