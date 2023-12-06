function processData(input) {
    const linhas = input.trim().split("\n");
    const n = linhas[0];

    const coordenadas = [];
    const pessoas = parseInt(linhas[0])

    for (let i = 1; i<linhas.length; i++){
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0],10),
            y: parseFloat(coord[1],10)
        })
    } 
    
        
    let maiorDistancia = 0;
       
    for(let i = 0; i < pessoas; i++){
        let x1 = coordenadas[i].x;
        let y1 = coordenadas[i].y;

        for(let p = i + 1; p < pessoas; p++){
            let x2 = coordenadas[p].x;
            let y2 = coordenadas[p].y;
            
            const distancia = Math.sqrt(((x2-x1)**2 + (y2-y1)**2));
            
            if (distancia > maiorDistancia){
                maiorDistancia = distancia
            }
        }
    }
    console.log(maiorDistancia)
   
    
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
