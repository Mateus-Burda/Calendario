let data = new Date(); //retorna a data de hoje
let dataHoje = {
    dia : data.getDate(),
    ano : data.getFullYear(),
    mes: data.getMonth()+1,
    nomeDoMes : definirMes(),
    diaDaSemana: definirDia(),
    quantosDiasTem : diasDoMes(),
}
console.log(dataHoje);
function definirDia(){
    let dia = data.getDay();
    switch (dia) {
        case 0: return "Domingo";
        break;
        case 1: return "Segunda";
        break;
        case 2: return "Terça";
        break;
        case 3: return "Quarta";
        break;
        case 4: return "Quinta";
        break;
        case 5: return "Sexta";
        break;
        case 6: return "Sábado";
        break;  
    }
}
//Função para escrever o mês atual dinamicamente
function definirMes(){
let mesAtualNumero = data.getMonth()+1; //precisa do +1 por que a contagem dos meses começa em janeiro como sendo o mês 0.
switch (mesAtualNumero) {
        case 1: return "Janeiro";
        break;
        case 2: return "Fevereiro";
        break;
        case 3: return "Março";
        break;
        case 4: return "Abril";
        break;
        case 5: return "Maio";
        break;
        case 6: return "Junho";
        break;
        case 7: return "Julho";
        break;
        case 8: return "Agosto";
        break;
        case 9: return "Setembro";
        break;
        case 10: return "Outubro";
        break;
        case 11: return "Novembro";
        break;
        case 12: return "Dezembro";
        break;
}
}

let mesElemento = document.getElementById("mes");
mesElemento.innerHTML = dataHoje.nomeDoMes + "  "+ dataHoje.ano;
//Fim do algoritmo para escrever o mês atual dinamicamente
//Algoritmo para definir quantidade de dias no mês
function diasDoMes(){
switch (data.getMonth()+1) {
    case 1: return ; 31;
    break;
    case 2: if ((dataHoje.ano%4)!=0){return 28}else{return 29;} //if para calcular se o ano é bissexto ou não
    break;
    case 3: return 31;
    break;
    case 4: return 30;
    break;
    case 5: return 31;
    break;
    case 6: return 30;
    break;
    case 7: return 31;
    break;
    case 8: return 31;
    break;
    case 9: return 30;
    break;
    case 10: return 31;
    break;
    case 11: return 30;
    break;
    case 12: return 31;
    break;
}
}
//Algoritmo para adicionar a quantidade de dias do mês
for (let index = 1; index <= dataHoje.quantosDiasTem; index++) {
    let novoH = document.createElement('h4')
    let numeroDosDias = document.getElementById("dias-numero");
    novoH.innerHTML = index;
    numeroDosDias.appendChild(novoH);
}
//Fim do algoritmo




