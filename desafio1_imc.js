const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu peso em Kg: ', (peso) => {
  rl.question('Digite sua altura M: ', (altura) => {
    const pesoNum = Number(peso);
    const alturaNum = Number(altura);

    const imc = pesoNum / (alturaNum * alturaNum);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
      console.log('Você está abaixo do peso.');
    } else if (imc <= 24.9) {
      console.log('Você está no peso ideal.');
    } else {
      console.log('Você está acima do peso.');
    }

    rl.close();
  });
});