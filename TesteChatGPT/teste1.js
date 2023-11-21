// Defina as taxas de câmbio (estas são apenas exemplos, não são taxas reais)
const taxaDolarParaEuro = 0.85;
const taxaDolarParaLibra = 0.75;

// Função para converter uma quantia de uma moeda para outra
function converterMoeda(quantia, moedaOrigem, moedaDestino) {
    let taxaDeCambio;

    // Defina as taxas de câmbio com base nas moedas de origem e destino
    if (moedaOrigem === 'USD' && moedaDestino === 'EUR') {
        taxaDeCambio = taxaDolarParaEuro;
    } else if (moedaOrigem === 'USD' && moedaDestino === 'GBP') {
        taxaDeCambio = taxaDolarParaLibra;
    } else {
        // Adicione mais casos conforme necessário para outras moedas
        console.log('Não foi possível encontrar uma taxa de câmbio para a conversão desejada.');
        return null;
    }

    // Realize a conversão
    const quantiaConvertida = quantia * taxaDeCambio;
    return quantiaConvertida;
}

// Exemplo de uso
const quantiaOriginal = 100;
const moedaOrigem = 'USD';
const moedaDestino = 'EUR';

const resultado = converterMoeda(quantiaOriginal, moedaOrigem, moedaDestino);

if (resultado !== null) {
    console.log(`${quantiaOriginal} ${moedaOrigem} é equivalente a ${resultado} ${moedaDestino}`);
}
