// Clima: Frio (<15), Agradável (15 a 27), Quente (>27)
let temperatura = 20;

if (temperatura < 15) {
    console.log('O clima está frio');
} else if (temperatura >= 15 && temperatura <= 27) {
    console.log('O clima está agradável');
} else {
    console.log('O clima está quente');
}