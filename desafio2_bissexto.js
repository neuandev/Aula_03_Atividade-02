const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um ano: ', (ano) => {
  const anoNum = Number(ano);

  const ehBissexto = (anoNum % 4 === 0) && (anoNum % 100 !== 0 || anoNum % 400 === 0);

  if (ehBissexto) {
    console.log(`${anoNum} é um ano bissexto.`);
  } else {
    console.log(`${anoNum} não é um ano bissexto.`);
  }

  rl.close();
});