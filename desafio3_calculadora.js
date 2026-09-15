const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite o operador (+, -, *, /): ', (operador) => {
      const n1 = Number(num1);
      const n2 = Number(num2);
      let resultado;

      switch (operador) {
        case '+':
          resultado = n1 + n2;
          break;
        case '-':
          resultado = n1 - n2;
          break;
        case '*':
          resultado = n1 * n2;
          break;
        case '/':
          resultado = n1 / n2;
          break;
        default:
          console.log('Operador inválido!');
          rl.close();
          return;
      }

      console.log(`Resultado: ${resultado}`);
      rl.close();
    });
  });
});