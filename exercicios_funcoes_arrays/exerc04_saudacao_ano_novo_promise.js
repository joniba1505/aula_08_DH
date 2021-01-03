// 4. Faça o mesmo utilizando Promise com concatenação de then



    function contagemRegressiva() {
        for(let i=10; i>0; i--) {
console.log(i);
        }
    }
        
    function saudacao() {
      let msg =   "Feliz Ano Novo!";
    return msg;
    }
    
    
    let p =  new Promise((resolve, reject) => {
let mensagem = saudacao();
if (mensagem == "Feliz Ano Novo!") {
                resolve();
}
else {
    reject("Mensagem não pode ser exibida!");
}            
});
    
    p.then(() =>
        contagemRegressiva()
        
        );
        p.then(() =>
        console.log(saudacao())
        );
        p.catch((data) =>
        console.log(data)
        );