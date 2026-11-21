export class Funcionario {
    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(nome: string, matricula: number, salario: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    public get getNome(): string {return this.nome}
    public get getMatricula(): number {return this.matricula}
    public get getSalario():  number {return this.salario}

    public set setNome(novoNome: string) {
        if (novoNome.trim() .length === 0) {
            console.log("\n ERRO: O nome não pode ser vazio");
            return;
        }
        this.nome = novoNome;
    }


    public set setMatricula(novomatricula: number) {
        if (novomatricula === 0) {
            console.log("\n ERRO: A matricula deve ser válido");
            return;
        }
        this.matricula = novomatricula;
    }

    public set setSalario(novoSalario: number) {
        if (novoSalario === 0) {
            console.log("\n ERRO: O salario deve ser válido");
            return;
        }
        this.salario = novoSalario;
    }

} 