import yellow from 'chalk';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  console.log(yellow('lista de links'), resultado);
}

processaTexto(caminho);