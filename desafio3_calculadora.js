const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função reutilizável: realiza a operação
function calcular(n1, operador, n2) {
  switch (operador) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    default:
      return null;
  }
}

// Loop: continua perguntando até o usuário digitar "sair"
function perguntarOperacao() {
  rl.question('\nDigite o primeiro número (ou "sair" para encerrar): ', (num1) => {
    const entrada1 = num1.trim().toLowerCase();

    if (entrada1 === 'sair') {
      console.log('Encerrando...');
      rl.close();
      return;
    }

    rl.question('Digite o segundo número: ', (num2) => {
      rl.question('Digite o operador (+, -, *, /): ', (operador) => {
        const n1 = Number(entrada1);
        const n2 = Number(num2.trim());
        const op = operador.trim();

        if (isNaN(n1) || isNaN(n2)) {
          console.log('Números inválidos.');
        } else {
          const resultado = calcular(n1, op, n2);
          if (resultado === null) {
            console.log('Operador inválido!');
          } else {
            console.log(`Resultado: ${resultado}`);
          }
        }

        perguntarOperacao();
      });
    });
  });
}

perguntarOperacao();