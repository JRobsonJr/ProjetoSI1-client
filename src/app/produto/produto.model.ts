import { Categoria } from "./categoria/categoria.model";

export class Produto {
  id: number;
  nome: string;
  preco: number;
  codigoBarra: string;
  fabricante: string;
  // categoria: any;
  disponivel: boolean;
  nomeCategoria: string;

  constructor() {
  }

}
