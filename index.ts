import { Artigo } from "./Artigo";
import { Livro } from "./Livro";
import { Revista } from "./Revista";


const artigo1 = new Artigo("O Senhor dos Anéis", "J.R.R. Tolkien", new Date("1954-07-29"));
artigo1.exibirDetalhe();

const revista1 = new Revista("Revista Natureza", "John Doe", 42);
revista1.exibirDetalhe();

const livro1 = new Livro("O Hobbit", "J.R.R. Tolkien", 310);
livro1.exibirDetalhe();