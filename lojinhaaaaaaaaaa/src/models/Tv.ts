import { Produto } from "./Produto.js";

export class Tv extends Produto {
    
    private tamanho: number;

    constructor(cod: number, fabricante: string, preco: number, tamanho: number) {
        super(cod, fabricante, preco);
        this.tamanho = tamanho;
    }

    public get getTamanho(): number {return this.tamanho}

    public set setTamanho(novoTamanho: number) {
        if (novoTamanho === 0) {
            console.log("\n ERRO:O tamanho da tela deve ser maior que zero");
            return;
        }
        this.tamanho = novoTamanho;
    }
}