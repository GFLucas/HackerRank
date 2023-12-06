function solucao(carta) {
    const cartaPraCima = ["Q", "J", "K", "A", "2", "3"];
     let manilha = ["Q", "J", "K", "A", "2", "3"];
     const proximaManilha = cartaPraCima.indexOf(carta);
     
     if (proximaManilha === 5){
         console.log(manilha = manilha[0]);
     }
     else if (proximaManilha >=0 && proximaManilha <=4){
         manilha = cartaPraCima[proximaManilha + 1];
         console.log(manilha);
     }          
     else {
         console.log("Nao existe");
     } 
 }
    
 function processData(input) {
    solucao(input);
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