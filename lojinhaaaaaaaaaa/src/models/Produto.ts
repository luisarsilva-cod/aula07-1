export class Produto {
    private cod: number;
    private fabricante: string;
    private preco: number;

    constructor(cod: number, fabricante: string, preco: number) {
        this.cod = cod;
        this.fabricante = fabricante;
        this.preco = preco;
    }

    public get getCod(): number {return this.cod}
    public get getFabricante(): string {return this.fabricante}
    public get getPreco():  number {return this.preco}

    public set setCod(novoCod: number) {
        if (novoCod === 0) {
            console.log("\n ERRO: O codigo de barras não pode ser vazio");
            return;
        }
        this.cod = novoCod;
    }


    public set setFabricante(novoFabricante: string) {
        if (novoFabricante.trim() .length === 0) {
            console.log("\n ERRO: A fabricante deve ser válido");
            return;
        }
        this.fabricante = novoFabricante;
    }

    public set setPreco(novoPreco: number) {
        if (novoPreco === 0) {
            console.log("\n ERRO: O Preco deve ser válido");
            return;
        }
        this.preco = novoPreco;
    }

} 