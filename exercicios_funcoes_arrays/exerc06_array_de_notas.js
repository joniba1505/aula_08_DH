// 6. Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0], construa uma função para imprimir apenas as 
//notas acima de 7

let notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

//da forma tradicional
/*
function imprimeNotasAcimaDeSete(nota) {
    
    for (let i=0; i<notas.length; i++) {
        if (notas[i] >= 7){ 
    console.log(notas[i]);
    }
}
console.log(nota);
}

imprimeNotasAcimaDeSete(notas);
*/

//usando o método filter
let notasMaioresQueSete = notas.filter(function(nota) {
return nota >= 7;
});


function imprimeNotasAcimaDeSete() {
    notasMaioresQueSete.forEach(function(nota) {
        console.log(nota);
    });   
}


imprimeNotasAcimaDeSete();

