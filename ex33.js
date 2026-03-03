let numero = 7;
let divisor = 2;
let ehPrimo = true;

if (numero < 2) {
    ehPrimo = false;
} else {
    while (divisor < numero) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
        divisor++;
    }
}
 if (ehPrimo) {
    console.log(`${numero} é um número primo`);
 } else {
    console.log(`${numero} não é um número primo`);
 }
 