let promise = new Promise((resolve, reject) => {
let resultado = true;
if (resultado) {
    resolve("Deu tudo certo!");
} else {
    reject("Deu tudo errado!");
}
});

promise.then((data) =>
console.log(`Resultado positivo: ${data}`) 
);
promise.catch((data) =>
console.log(`Resultado negativo: ${data}`)
);
console.log("Fui implementado depois, mas executado antes, por causa do setTimeout.");