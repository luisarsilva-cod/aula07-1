import { Conta } from "./Conta.js";

export class Poupanca extends Conta {
    
    private taxa: number;

    constructor(titular: string, agencia: number, saldo: number, taxa: number) {
        super(titular, agencia, saldo);
        this.taxa = taxa;
    }

    public get getTaxa(): number {return this.taxa}

    public set setTaxa(novoTaxa: number) {
        if (novoTaxa === 0) {
            console.log("\n ERRO:O Taxa de rendimento mensal deve ser maior que zero");
            return;
        }
        this.taxa = novoTaxa;
    }
}