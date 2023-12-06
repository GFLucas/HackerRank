function solucao(precos) {
    if (precos.length >= 3) {
            precos.sort((a,b) => a-b);
            
            const desconto = precos[0]*0.50;
            precos.shift();
            precos.unshift(desconto);
    
            let soma = precos.reduce((acumulador, elementoAtual, indice, array) => acumulador + elementoAtual);
            console.log(soma);
        } else if (precos.length <3){
            let soma = precos.reduce((acumulador, elementoAtual, indice, array) => acumulador + elementoAtual);
            console.log(soma);
        };  
    }
    
    
    
    function processData(input) {
      const lista = input.split(" ");
      lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
      solucao(lista);
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