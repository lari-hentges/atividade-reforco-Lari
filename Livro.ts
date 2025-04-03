import { MaterialLeitura } from "./MaterialLeitura";

export class Livro implements MaterialLeitura{
    titulo: String;
    autor: String;
    numeroPaginas: number;

    constructor(titulo: String, autor: String, numeroPaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    exibirDetalhe(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Número de Páginas: ${this.numeroPaginas}`);
    }
}