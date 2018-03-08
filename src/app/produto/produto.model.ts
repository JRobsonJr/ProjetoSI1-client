import { Categoria } from "./categoria/categoria.model";

export class Produto {
  id: number;
  nome: string;
  preco: number;
  codigoBarra: string;
  fabricante: string;
  categoria: Categoria;
  disponivel: boolean;

  constructor() {
    this.categoria = new Categoria();
  }

  getCategoria(): string {
    return this.categoria.nome;
  }

  getDesconto() {
    return this.categoria.desconto;
  }
}
