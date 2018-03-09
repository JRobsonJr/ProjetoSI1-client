export class Categoria {
    id: number;
    nome: string;
    desconto: any;

    constructor(nome: string) {
        this.nome = nome;
        this.desconto = null;
    }
}