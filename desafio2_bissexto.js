const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função reutilizável: verifica se um ano é bissexto
function ehBissexto(ano) {
  return (ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0);
}

// Loop: continua perguntando até o usuário digitar "sair"
function perguntarAno() {
  rl.question('\nDigite um ano (ou "sair" para encerrar): ', (entrada) => {
    const valor = entrada.trim().toLowerCase();

    if (valor === 'sair') {
      console.log('Encerrando...');
      rl.close();
      return;
    }

    const ano = Number(valor);

    if (isNaN(ano)) {
      console.log('Entrada inválida, digite um número.');
    } else if (ehBissexto(ano)) {
      console.log(`${ano} é um ano bissexto.`);
    } else {
      console.log(`${ano} não é um ano bissexto.`);
    }

    perguntarAno();
  });
}

perguntarAno();1