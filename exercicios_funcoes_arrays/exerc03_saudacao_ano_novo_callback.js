// 3. Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de uma callback

function contagemRegressiva(saudacao) {
    for(let i=10; i>0; i--) {
        console.log(i);
    }
    saudacao();
    }

    function saudacao() {
console.log("Feliz Ano Novo!");
    }

    contagemRegressiva(saudacao);