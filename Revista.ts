import { MaterialLeitura } from "./MaterialLeitura";

export class Revista implements MaterialLeitura{
    titulo: String;
    autor: String;
    numeroEdicao: number;

    constructor(titulo: String, autor: String, numeroEdicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroEdicao = numeroEdicao;
    }

    exibirDetalhe(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Número da Edição: ${this.numeroEdicao}`);
    }
}