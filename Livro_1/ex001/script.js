const pessoas = Number(document.querySelector('idp'))
const peixes = Number(document.querySelector('idpex'))

function somar(){
    const entrada = 20 * pessoas;
    const ppegos = 12 * (peixes - pessoas);
    const pagar = entrada + ppegos;
    h3.innerText = `O valor a ser pago é: R$ ${pagar}`;
}
