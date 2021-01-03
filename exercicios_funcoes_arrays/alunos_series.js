/*
1. Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os alunos do 9º terão aulas de física às quartas-

feiras. Você deve criar uma função que receba um array de objetos contendo nome e série de cada aluno e atribua a sua respectiva 

disciplina da quarta-feira. (O array de alunos deve ser criado como você desejar contanto que contenha pelo menos 5 alunos).
*/

let alunos = [
{nome: "Pedro", serie: "8ª", disciplina: ""},
{nome: "José", serie: "8ª", disciplina: ""},
{nome: "Joana", serie: "9ª", disciplina: ""},
{nome: "Karine", serie: "9ª", disciplina: ""},
{nome: "Joaquim", serie: "8ª", disciplina: ""},
{nome: "Marina", serie: "8ª", disciplina: ""},
{nome: "Wilma", serie: "9ª", disciplina: ""}
];

alunos.forEach(function(aluno) {
if(aluno.serie == "8ª") {
    aluno.disciplina = "história";
} else {
    aluno.disciplina = "física";
}
console.log(`Nome: ${aluno.nome}.`);
console.log(`Série: ${aluno.serie}.`);
console.log(`Disciplina: ${aluno.disciplina}.`);
});
