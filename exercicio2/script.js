//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console 
//as seguintes mensagens seguidas pelo `true` ou `false`:
//O primeiro numero é maior que segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true
//divisível = com resto zero
//Obs: O true ou false vai depender dos números inseridos e do resultado das operações.

let numero1 =Number(prompt("insira um numero"))
let numero2 = Number(prompt("insira outro numuero"))
let maior = numero1 > numero2
console.log("o primeiro numero é maior que o segundo?",maior)
let igual = numero1 === numero2
console.log("o primeiro numero é igual ao segundo?", igual)
let divisivel1 = (numero1%numero2) ===0
console.log("o primeiro numero é divisivel pelo segundo?",divisivel1)
let divisivel2 = (numero2% numero1) ===0
console.log("o segundo numero é divisivel pelo primeiro?",divisivel2)
