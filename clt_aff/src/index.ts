import { Gerente } from "./models/Gerente.js";
import { Programador } from "./models/Programador.js";
import readline from "readline-sync";

console.log("=== EMPRESAESAESAESAESA ===")

const tipo = readline.question("Você deseja adicionar um gerente ou um programador? ")
if (tipo === "gerente"){
    
console.log("\n=== GERENTE ===");
let nomeG = readline.question("Informe o nome do funcionario: ");
let matriculaG = readline.questionFloat("Informe a matricula: ");
let salarioG = readline.questionFloat("Informe o salario: ");
let bonusAnu = readline.questionFloat("Informe o bonus anual: ");
console.log("============================")

let gerente = new Gerente(nomeG, matriculaG, salarioG, bonusAnu)

console.log("\n=== Funcionario  ===");
console.log(gerente);
console.log("============================");

}

else if (tipo === "programador") {
console.log("\n=== PROGRAMADOR ===");
let nomeP = readline.question("Informe o nome do funcionario: ");
let matriculaP = readline.questionFloat("Informe a matricula: ");
let salarioP = readline.questionFloat("Informe o salario: ");
let linguagem = readline.question("Informe o tipo de linguagem: ");
console.log("============================");

let programador = new Programador(nomeP, matriculaP, salarioP, linguagem);

console.log("\n=== ITENS CADASTRADOS ===");
console.log(programador);
console.log("============================");

}

else {
    console.log("Invalido! insira uma informação válida")
}