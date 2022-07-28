let dataHoje = new Date(); //retorna a data de hoje
let anoAtual = dataHoje.getFullYear(); //retorna o ano atual

//Algoritmo para escrever o mês atual dinamicamente
let mesAtualNumero =  new Date().getMonth()+1; //precisa do +1 por que a contagem dos meses começa em janeiro como sendo o mês 0.
let mesAtualEscrito;
switch (mesAtualNumero) {
        case 1: mesAtualEscrito = "Janeiro";
        break;
        case 2: mesAtualEscrito = "Fevereiro";
        break;
        case 3: mesAtualEscrito = "Março";
        break;
        case 4: mesAtualEscrito = "Abril";
        break;
        case 5: mesAtualEscrito = "Maio";
        break;
        case 6: mesAtualEscrito = "Junho";
        break;
        case 7: mesAtualEscrito = "Julho";
        break;
        case 8: mesAtualEscrito = "Agosto";
        break;
        case 9: mesAtualEscrito = "Setembro";
        break;
        case 10: mesAtualEscrito = "Outubro";
        break;
        case 11: mesAtualEscrito = "Novembro";
        break;
        case 12: mesAtualEscrito = "Dezembro";
        break;
}
let mesElemento = document.getElementById("mes");
mesElemento.innerHTML = mesAtualEscrito;
//Fim do algoritmo para escrever o mês atual dinamicamente

//Algoritmo para definir quantidade de dias no mês
let quantidadeDias;
switch (mesAtualNumero) {
    case 1: quantidadeDias = 31;
    break;
    case 2: if ((anoAtual%4)!=0){quantidadeDias=28}else{quantidadeDias = 29;} //if para calcular se o ano é bissexto ou não
    break;
    case 3: quantidadeDias = 31;
    break;
    case 4: quantidadeDias = 30;
    break;
    case 5: quantidadeDias = 31;
    break;
    case 6: quantidadeDias = 30;
    break;
    case 7: quantidadeDias = 31;
    break;
    case 8: quantidadeDias = 31;
    break;
    case 9: quantidadeDias = 30;
    break;
    case 10: quantidadeDias = 31;
    break;
    case 11: quantidadeDias = 30;
    break;
    case 12: quantidadeDias = 31;
    break;
}
let a= 0
for (let index = 0; index < quantidadeDias; index++) {
    
}



