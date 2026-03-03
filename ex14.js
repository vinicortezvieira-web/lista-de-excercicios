let compra = 95; 
let desconto = compra * 0.1; 

if (compra >= 100) {
    console.log(`O valor do desconto é ${desconto}`);
    console.log(`Total a pagar: ${compra - desconto}`);
} else {
    console.log("Não tem desconto");
}