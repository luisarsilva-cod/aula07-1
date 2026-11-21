import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    
    private bonusAnu: number;

    constructor(nome: string, matricula: number, salario: number, bonusAnu: number) {
        super(nome, matricula, salario);
        this.bonusAnu = bonusAnu;
    }

    public get getBonusAnu(): number {return this.bonusAnu}

    public set setBonusAnu(novoBonusAnu: number) {
        if (novoBonusAnu === 0) {
            console.log("\n ERRO: O bonus anual deve ser maior que zero");
            return;
        }
        this.bonusAnu = novoBonusAnu;
    }
}