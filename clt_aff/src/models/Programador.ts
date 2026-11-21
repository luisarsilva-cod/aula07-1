import { Funcionario } from "./Funcionario.js";

export class Programador extends Funcionario {
    private linguagem: string;

    constructor(nome: string, matricula: number, salario: number, linguagem: string) {
        super(nome, matricula, salario);
        this.linguagem = linguagem
    }

    public get getLinguagem(): string {return this.linguagem}

    public set setLinguagem(novaLinguagem: string) {
        if (novaLinguagem.trim() .length === 0) {
            console.log("\n ERRO: A linguagem deve ser válido");
            return;
        }
        this.linguagem = novaLinguagem;
    }
}