
let idade = 18;

if (idade < 16) {
    console.log('Não permitido a votar');
} else if ((idade >= 16 && idade <= 17) || idade > 70) {
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}