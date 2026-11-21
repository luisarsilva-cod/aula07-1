export class Funcionario {
    private nome: string;
    private matricula: number;
    private salari

    constructor(nome: string, matricula: number) {
        this.nome = nome;
        this.matricula = matricula;
    }

    public get getNome(): string {return this.nome}
    public get getMatricula(): number {return this.matricula}

    public set setNome(novoNome: string) {
        if (novoNome.trim() .length === 0) {
            console.log("\n ERRO: O título não pode ser vazio");
            return;
        }
        this.nome = novoNome;
    }


    public set setMatricula(novomatricula: number) {
        if (novomatricula === 0) {
            console.log("\n ERRO: O ano de publicação deve ser válido");
            return;
        }
        this.matricula = novomatricula;
    }
} 