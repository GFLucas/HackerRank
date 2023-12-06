function solucao(numeros) {
    let soma = 0
        let escolhido =0
        for(let i = 0; i < numeros.length; i++){
            soma+=numeros[i];
            escolhido = soma%numeros.length
    }
    if(escolhido === 0 ){
        console.log(numeros.length)
        
    }else (console.log(escolhido))
      
    }
    
    function processData(input) {
        const strings = input.split(" ");
        const numeros = [];
        for(let i = 0; i < strings.length; i++) {
              numeros.push(parseInt(strings[i] ,10))
          }
        solucao(numeros)
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