export class Admin {
  nome: string;
  login: string;
  senha: string;

  constructor(login?: string, senha?: string) {
    this.login = login;
    this.senha = senha;
  }
}
