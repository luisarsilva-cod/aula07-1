import { Conta } from "./Conta.js";

export class Corrente extends Conta {
    
    private limite: number;

    constructor(titular: string, agencia: number, saldo: number, limite: number) {
        super(titular, agencia, saldo);
        this.limite = limite;
    }

    public get getLimite(): number {return this.limite}

    public set setLimite(novoLimite: number) {
        if (novoLimite === 0) {
            console.log("\n ERRO:O Limite do cheque especial deve ser maior que zero");
            return;
        }
        this.limite = novoLimite;
    }
}