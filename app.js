alert ("Boas vindas ao jogo do número secreto");
let numeroSecreto = 9;
console.log (numeroSecreto)
let chute = prompt ("Escolha um número entre 1 e 40");

// é para comentários - igual na robótica
// if - se o chute for igual ao número secreto 
if (chute == numeroSecreto) {
    alert (`Isso mesmo! Você descobriu o número secreto ${numeroSecreto}`);
}
//
else {
    alert ("Você errou! :(");
}