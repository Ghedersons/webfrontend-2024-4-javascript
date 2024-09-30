const readlinesync = require('readline-sync');

// Função para calcular o desconto 
function calcularDesconto(valor, porcentagem) {
    return valor - (valor * (porcentagem / 100));  
}

// Receber valor da conta 
var valorConta = parseFloat(readlinesync.question('Digite o valor da conta: '));

// Receber número de pessoas da mesa
var numeroPessoas = parseInt(readlinesync.question('Digite o número de pessoas da mesa: '));

// Receber o método de pagamento
console.log('Escolha o método de pagamento: ');
console.log('1 - Pix');
console.log('2 - Dinheiro');
console.log('3 - Cartão');
var metodoPagamento = readlinesync.question('Escolha uma opção: ');

// Iniciar valor final
var valorFinalPorPessoa;

// Verificar método de pagamento e aplicar o desconto
if (metodoPagamento === '1') {
    // Pagamento com Pix
    var valorComDesconto = calcularDesconto(valorConta, 10); // Espaço corrigido aqui
    valorFinalPorPessoa = valorComDesconto / numeroPessoas;
    console.log(`Você escolheu o Pix, valor com desconto de 10%: R$ ${valorComDesconto.toFixed(2)}`);
    console.log(`Valor por pessoa: R$ ${valorFinalPorPessoa.toFixed(2)}`);
} else if (metodoPagamento === '2') {
    // Pagamento em dinheiro
    var valorComDesconto = calcularDesconto(valorConta, 10); // Espaço corrigido aqui
    valorFinalPorPessoa = valorComDesconto / numeroPessoas;
    console.log(`Você escolheu o dinheiro, valor com desconto de 10%: R$ ${valorComDesconto.toFixed(2)}`);
    console.log(`Valor por pessoa: R$ ${valorFinalPorPessoa.toFixed(2)}`);
} else if (metodoPagamento === '3') {
    // Pagamento com cartão sem desconto
    valorFinalPorPessoa = valorConta / numeroPessoas;
    console.log(`Você escolheu o cartão, valor sem desconto: R$ ${valorConta.toFixed(2)}`);
    console.log(`Valor por pessoa: R$ ${valorFinalPorPessoa.toFixed(2)}`);
} else {
    console.log(`Opção inválida. Tente novamente.`);
}
