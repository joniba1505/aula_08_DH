// 2. Crie uma arrow function que receba um número e verifique se é primo.

let numPrimo = (n) => {
    for (let i=2; i<=(n/2); i++) {
        if (n%i == 0) {
            console.log(`${n} não é primo.`);
            break;
        }
    else {
        console.log(`${n} é primo.`);
break;
    }
    }
}

numPrimo(13);