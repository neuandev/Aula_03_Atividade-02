const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função reutilizável: calcula o IMC
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Função reutilizável: classifica o resultado
function classificarIMC(imc) {
  if (imc < 18.5) return 'abaixo do peso';
  if (imc <= 24.9) return 'peso ideal';
  return 'acima do peso';
}

// Loop (via recursão, pois readline é assíncrono) para vários pacientes
function perguntarPaciente(numero, total) {
  rl.question(`\nPaciente ${numero}/${total} - peso (kg): `, (peso) => {
    rl.question(`Paciente ${numero}/${total} - altura (m): `, (altura) => {
      const pesoNum = Number(peso.trim());
      const alturaNum = Number(altura.trim());

      if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum === 0) {
        console.log('Valores inválidos, pulando este paciente.');
      } else {
        const imc = calcularIMC(pesoNum, alturaNum);
        console.log(`IMC: ${imc.toFixed(2)} - ${classificarIMC(imc)}`);
      }

      if (numero < total) {
        perguntarPaciente(numero + 1, total);
      } else {
        console.log('\nTodos os pacientes foram calculados.');
        rl.close();
      }
    });
  });
}

rl.question('Quantos pacientes deseja calcular? ', (qtd) => {
  const total = Number(qtd.trim());

  if (isNaN(total) || total <= 0) {
    console.log('Quantidade inválida.');
    rl.close();
  } else {
    perguntarPaciente(1, total);
  }
});