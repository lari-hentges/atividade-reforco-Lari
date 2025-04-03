import { MaterialLeitura } from "./MaterialLeitura";

export class Artigo implements MaterialLeitura{
    titulo: String;
    autor: String;
    dataPublicacao: Date;

    constructor(titulo: String, autor: String, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, data da publicação: ${this.dataPublicacao}`)
    }
}