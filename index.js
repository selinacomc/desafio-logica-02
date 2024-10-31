// Desafio 02 - Calculadora de Partidas Rankeadas


function nivelRanking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
  
    let nivel = " ";
  

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário ";
    } else {
        nivel = "Imortal"
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}!`;
}

let vitorias = 38;
let derrotas = 5;
const resultado = nivelRanking(vitorias, derrotas);
console.log(resultado);
