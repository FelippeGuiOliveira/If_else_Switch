// ----------- 1 -----------

let idade = parseInt(prompt('Digite sua idade:'))
if(idade <= 18){
    alert('Você é menor de idade')
} else if (idade <= 60){
    alert('Você é adulto')
} else{
    alert('Você é idoso')
}

// ----------- 2 -----------

let idadeDirigir = parseInt(prompt('Digite sua idade:'))
if(idadeDirigir >= 18){
    alert('Você pode dirigir')
} else{
    alert('Você não pode dirigir')
}

// ----------- 3 -----------

let numero_1 = parseInt(prompt('Digite um numero'))
if(numero_1 < 0){
    console.log('O número é negativo');
} else if (numero_1 > 0){
    console.log('O número é positivo');
} else {
    console.log('O numero é igual a 0');        
}

// ----------- 4 -----------

let peso, altura, imc;
peso = parseFloat(prompt('coloque seu peso'))
altura = parseFloat(prompt('coloque sua altura'))
imc = (altura ** 2) / peso
if(imc >= 18.5 && imc <= 24.9){
    alert('Você esta saudavel')
} else{
    alert('Você não está saudavel')
}

// Switch case
// ----------- 5 -----------

let numero_2 = parseInt(prompt('escolha um numero de 1 a 7'))

switch (numero_2) {
    case 1:
        alert('Segunda-Feira')
        break;
    case 2:
        alert('Terça-Feira')
        break;
    case 3:
        alert('Quarta-Feira')
        break;
    case 4:
        alert('Quinta-Feira')
        break;
    case 5:
        alert('Sexta-feira')
        break;
    case 6:
        alert('Sabado')
        break;
    case 7:
        alert('Domingo')
    default:
        alert('Essa não é uma opção valida')
        break;
}

// ----------- 6 -----------

let idade_2 = parseInt(prompt('digite sua idade'))

switch (true) {
    case (idade_2 < 14):
        alert('Você é uma criança')        
    break;
    case (idade_2 < 18):
        alert('Você é uma adolecente')        
    break;
    case (idade_2 < 60):
        alert('Você é uma adulto')        
    break;
    case (idade_2 >= 60):
        alert('Você é uma idoso')        
    break;
    default:
        alert('idade inválida')
    break;
}

// ----------- 7 -----------

let operacao = prompt('Escreva uma das 4 operações matematicas basicas').toLowerCase()
let numero_3 = parseFloat(prompt('Escolha um numero'))
let numero_4 = parseFloat(prompt('Escolha outro numero'))
let resultado;

switch (true) {
    case (operacao == 'adicao' || operacao == 'adição' || operacao == 'mais'):
        resultado = numero_3 + numero_4
        alert(`Seu resultado é ${resultado}`)
        break;
    case (operacao == 'subtracao' || operacao == 'subtração' || operacao == 'menos'):
        resultado = numero_3 - numero_4
        alert(`Seu resultado é ${resultado}`)
        break;
    case (operacao == 'multiplicacao' || operacao == 'multiplicação' || operacao == 'vezes'):
        resultado = numero_3 * numero_4
        alert(`Seu resultado é ${resultado}`)
        break;
    case (operacao == 'divisao' || operacao == 'divisão' || operacao == 'dividir'):
        resultado = numero_3 / numero_4
        alert(`Seu resultado é ${resultado}`)
        break;
    default:
        alert('não trabalhamos com essa operação ainda')
        break;
}

// ----------- 8 -----------

alert('Escreva um dos cupons que você quer utilizar')
let cupom = prompt("DESC1 = 5% de desconto\nDESC2 = 10% de desconto\nDESC3 = 15% de desconto\nDESC4 = 20% de desconto\nDESC5 = 25% de desconto").toUpperCase()
let desconto;

switch (cupom) {
    case 'DESC1':
        alert(`5% de desconto`)
        desconto = 1000 - (0.05 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        break;
    case 'DESC2':
        alert(`10% de desconto`)
        desconto = 1000 - (0.10 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        break;
    case 'DESC3':
        alert(`15% de desconto`)
        desconto = 1000 - (0.15 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        break;
    case 'DESC4':
        alert(`20% de desconto`)
        desconto = 1000 - (0.20 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        break;
    case 'DESC5':
        alert(`25% de desconto`)
        desconto = 1000 - (0.25 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        break;
    default:
        alert('Esse não é um cupom válido')
        break;
}