function solucao(min, km) {
    if (min <= 20 && km<=10){
            let precoMin = min * 50;
            let precoKm = km * 70;
            let soma= precoKm+precoMin;
            Math. floor(soma); 
            console.log(soma);
        }
        else if (min >20 && km<=10){
            let precoMin = 20 * 50;
            let descontoMin = (min-20) *30;
            let precoKm = km * 70;
            let soma= precoKm+descontoMin+precoMin;
            Math. floor(soma);
            console.log(soma);
        }
        else if (min <=20 && km>10){
            let precoMin = min * 50;
            let descontoKm = (km-10) *50;
            let precoKm = 10 * 70;
            let soma= precoKm+precoMin+descontoKm;
            Math. floor(soma) 
            console.log(soma);
        }
        if (min > 20 && km>10){
            let precoMin = 20 * 50;
            let precoKm = 10 * 70;
            let descontoMin = (min-20) *30;
            let descontoKm = (km-10) *50;
            let soma= precoKm+precoMin+descontoKm+descontoMin;
            Math. floor(soma); 
            console.log(soma);
        }
        
    } 
    function processData(input) {
        const x = input.split(" ");
        const min = parseFloat(x[0], 10);
        const km = parseFloat(x[1], 10);
        solucao(min, km);
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