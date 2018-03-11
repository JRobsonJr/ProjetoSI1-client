import { Categoria } from './categoria/categoria.model';

export class Produto {
  id: number;
  nome: string;
  preco: number;
  codigoBarra: string;
  fabricante: string;
  categoria: Categoria;
  disponivel: boolean;
  nomeCategoria: string;

  setCategoria() {
    this.categoria = new Categoria(this.nomeCategoria);
  }

  setNomeCategoria(): any {
    this.nomeCategoria = this.categoria.nome;
  }
}
