import { Tv } from "./models/Tv.js";
import { Phone } from "./models/Phone.js";
import readline from "readline-sync";

console.log("=== LOJINHAINHAINHAINHAINHA ===")

const tipo = readline.question("Você deseja cadastrar uma televisao ou um telefone? ")
if (tipo === "televisao"){
    
console.log("\n=== TEVELISAO ===");
let codT = readline.questionFloat("Informe o codigo de barras: ");
let fabricanteT = readline.question("Informe o fabricante: ");
let precoT = readline.questionFloat("Informe o preço: ");
let tamanho = readline.questionFloat("Informe o tamanho da tela em polegadas: ");
console.log("============================")

let televisao = new Tv(codT, fabricanteT, precoT, tamanho)

console.log("\n=== TEVELISAO  ===");
console.log(televisao);
console.log("============================");

}

else if (tipo === "telefone") {
console.log("\n=== TELEFONEONEONEONEONE ===");
let codS = readline.questionFloat("Informe o codigo de barras: ");
let fabricanteS = readline.question("Informe o fabricante: ");
let precoS = readline.questionFloat("Informe o preço: ");
let armazenamento = readline.questionFloat("Informe o tamanho do armazenamento(GB): ");
console.log("============================");

let telefone = new Phone(codS, fabricanteS, precoS, armazenamento);

console.log("\n=== FIUFIU OLHA A MENSAGEM ===");
console.log(telefone);
console.log("============================");

}

else {
    console.log("Invalido! insira uma informação válida")
}