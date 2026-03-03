let lado1 = 100;
let lado2 = 100;
let lado3 = 100;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("equilátero");
} 
else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("isósceles");
} 
else {
    console.log("escaleno");
}