// 7. Crie um array de objetos onde cada objeto será um produto de supermercado e terá o nome do produto e o seu respectivo preço, agora 
//construa uma função que some todos os valores e te devolva o total.

var produtos =[
{nome: "sabão", preco: 10},
{nome: "arroz", preco: 20.00},
{nome: "feijão", preco: 15.00}
];

//Da forma tradicional
/*
function somaPrecos() {
    let soma = 0;
    for(let i=0; i<produtos.length; i++) {
        soma+= produtos[i].preco;
    }

return soma;
}

console.log(`Preço total dos produtos: R$ ${somaPrecos()}`);
*/

//Usando a função reduce()
total = produtos.reduce(function(total, produto) {
return total+= produto.preco;

}, 0, []);
console.log(`Valor total dos produtos: R$ ${total.toFixed(2)}.`);