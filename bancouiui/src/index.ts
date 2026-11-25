import { Corrente } from "./models/Corrente.js";
import { Poupanca } from "./models/Poupanca.js";
import readline from "readline-sync";

console.log("=== CONTINHA 🤏 ===")

const tipo = readline.question("Você deseja cadastrar uma conta corrente ou poupanca? ")
if (tipo === "corrente"){
    
console.log("\n=== CONTA CORRENTENTENTENTENTE ===");
let titularC = readline.question("Informe o titular: ");
let agenciaC = readline.questionFloat("Informe a agencia: ");
let sladoC = readline.questionFloat("Informe o saldo: ");
let limite = readline.questionFloat("Informe o limite do cheque especial: ")
console.log("============================")

let corrente = new Corrente(titularC, agenciaC, sladoC, limite)

console.log("\n=== CORRENTE ===");
console.log(corrente);
console.log("============================");

}

else if (tipo === "poupanca") {
console.log("\n=== POUPA ===");
let titularP = readline.question("Informe o titular: ");
let agenciaP = readline.questionFloat("Informe a agencia: ");
let saldoP = readline.questionFloat("Informe o saldo: ");
let taxa = readline.questionFloat("Informe a de taxa de rendimento mensal: ");
console.log("============================");

let poupanca = new Poupanca(titularP, agenciaP, saldoP, taxa);

console.log("\n=== POUPANCA ===");
console.log(poupanca);
console.log("============================");

}

else {
    console.log("Invalido! insira uma informação válida")
}