import { Produto } from "./Produto.js";

export class Phone extends Produto {
    
    private armazenamento: number;

    constructor(cod: number, fabricante: string, preco: number, armazenamento: number) {
        super(cod, fabricante, preco);
        this.armazenamento = armazenamento;
    }

    public get getArmazenamento(): number {return this.armazenamento}

    public set setArmazenamento(novoArmazenamento: number) {
        if (novoArmazenamento === 0) {
            console.log("\n ERRO:O armazenamento deve ser maior que zero");
            return;
        }
        this.armazenamento = novoArmazenamento;
    }
}