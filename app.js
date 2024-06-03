alert ("Boas vindas ao jogo do número secreto");
let numeroSecreto = 38;
let chute = prompt ("Escolha um número entre 1 e 40");

// é para comentários - igual na robótica
// if - se o chute for igual ao número secreto 
if (numeroSecreto == chute) {
    console.log ("Isso mesmo! Você descobriu o número secreto (38)");
}
//
else {
    alert ("Você errou! :(");
}