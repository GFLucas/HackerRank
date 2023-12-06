function solucao(texto) {
    if(texto.length<=5000){
            const palavras = texto.replace(",", "").replace(".", "").replace(";","").replace(":","");
            const semEpacos = palavras.trim();
            const lista = semEpacos.split(" ");
            let contador = 0;
            for(let item of lista){
                if(item !== ''){
                    contador++
                }
            }
            console.log(contador)
        } else {
            console.log(0)
        }
    }
    
    function processData(input) {
        solucao(input)
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