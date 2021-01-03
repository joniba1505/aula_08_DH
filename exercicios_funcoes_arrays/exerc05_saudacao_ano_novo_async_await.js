// 5. Agora repita a função utilizando o método async/await




   async  function contagemRegressiva() {
        for(let i=10; i>0; i--) {
console.log(i);
        }
    }
        
   async  function saudacao() {
      let msg =   "Feliz Ano Novo!";
    return msg;
    }
    
    
    async function anoNovo() {
        await contagemRegressiva();
        let mensagem = await saudacao();
        console.log(mensagem);
    }

    anoNovo();