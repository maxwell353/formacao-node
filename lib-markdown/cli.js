import yellow from 'chalk';
import pegaArquivo from './index.js';
import validaURLs from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if (caminhoDeArquivo[3] === 'validar') {
    console.log(yellow('links validados'), await validaURLs(resultado));
  } else {
    console.log(yellow('lista de links'), resultado);
  }
}

processaTexto(caminho);