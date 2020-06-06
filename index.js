const visorPrincipal = document.getElementById('visorPrincipal');
const visorResultado = document.getElementById('visorResultado');

function mudarSinal() {
    var operacao = visorPrincipal.value

    if (operacao.startsWith('-'))
        visorPrincipal.value = visorPrincipal.value.substring(1, visorPrincipal.length);
    else
        visorPrincipal.value = '-' + visorPrincipal.value;
}

function limparTela() {
    visorPrincipal.value = '';
    visorResultado.value = '';
}

function apagarUltimo() {
    if (visorPrincipal.value != undefined && visorPrincipal.value != '') {
        let novoValor = visorPrincipal.value.substring(0, visorPrincipal.value.length - 1);
        visorPrincipal.value = novoValor;
    }
}

function porcentagem() {
    const numero = visorPrincipal.value;

    if (isNaN(parseFloat(numero)))
        return;

    let resultado = parseFloat(numero) / 100;

    atualizarTela(resultado);
}

function resultado() {
    const operacaoCompleta = visorPrincipal.value;
    let operacaoSelecionada;
    let numeros;

    if (operacaoCompleta.includes('+')) {
        operacaoSelecionada = '+';
        numeros = operacaoCompleta.split('+');
        imprimirResultado(numeros[0], numeros[1], operacaoSelecionada);
        return;
    }
    if (operacaoCompleta[0] != '-' && operacaoCompleta.includes('-') || operacaoCompleta[0] == '-' && operacaoCompleta.substring(1, operacaoCompleta.length).includes('-')) {
        operacaoSelecionada = '-';
        numeros = operacaoCompleta.split('-');
        imprimirResultado(numeros[0], numeros[1], operacaoSelecionada);
        return;
    }
    if (operacaoCompleta.includes('/')) {
        operacaoSelecionada = '/';
        numeros = operacaoCompleta.split('/');
        imprimirResultado(numeros[0], numeros[1], operacaoSelecionada);
        return;
    }
    if (operacaoCompleta.includes('*')) {
        operacaoSelecionada = '*';
        numeros = operacaoCompleta.split('*');
        imprimirResultado(numeros[0], numeros[1], operacaoSelecionada);
        return;
    }
}

function imprimirResultado(numero1, numero2, operacao) {
    let resultado;
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
    }

    atualizarTela(resultado);
}

function atualizarTela(resultado) {
    visorPrincipal.value = '';
    visorResultado.value = resultado;
}

function divisao() { visorPrincipal.value += '/' }
function multiplicacao() { visorPrincipal.value += '*' }
function subtracao() { visorPrincipal.value += '-' }
function adicao() { visorPrincipal.value += '+' }

function adicionarPonto() { visorPrincipal.value += '.' };

function adicionar0() { visorPrincipal.value += '0' }
function adicionar1() { visorPrincipal.value += '1' }
function adicionar2() { visorPrincipal.value += '2' }
function adicionar3() { visorPrincipal.value += '3' }
function adicionar4() { visorPrincipal.value += '4' }
function adicionar5() { visorPrincipal.value += '5' }
function adicionar6() { visorPrincipal.value += '6' }
function adicionar7() { visorPrincipal.value += '7' }
function adicionar8() { visorPrincipal.value += '8' }
function adicionar9() { visorPrincipal.value += '9' }
