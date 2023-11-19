import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  #livros: Livro[] = [];

  constructor() { }

  obterLivros() {
    return this.#livros;
  }

  incluir(livro: Livro) {
    const ultimoCodigo = Math.max(...this.#livros.map(({codigo}) => codigo));

    this.#livros = [...this.#livros, {...livro, codigo: ultimoCodigo + 1}];
  }

  excluir(codigo: number) {
    const itemIndice = this.#livros.findIndex((livro) => livro.codigo === codigo);
    if(itemIndice === -1) return;
    this.#livros.splice(itemIndice, 1);
  }
}
