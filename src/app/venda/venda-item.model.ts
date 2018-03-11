import { Produto } from '../produto/produto.model';

export class VendaItem {
  id: number;
  produto: Produto;
  quantidade: number;
}
