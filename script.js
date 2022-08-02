let escolhaAno = 2022;
let escolhaMes = 1;

let data = new Date(escolhaAno,escolhaMes); //retorna a data de hoje
let dataHoje = {
    dia : data.getDate(),
    ano : data.getFullYear(),
    mes: data.getMonth()+1,
    nomeDoMes : definirMes(),
    diaDaSemana: definirDia(),
    quantidadeDeDias : quantosDias(),
}

let btnProximo=document.getElementById("btn-proximo");
btnProximo.onclick = function proxMes() {
    escolhaMes++;
    if(escolhaMes>=13){
        escolhaMes=0;
        escolhaAno++;
    }
    else{
    let data = new Date(escolhaAno,escolhaMes-1);
    dataHoje = {
        dia : data.getDate(),
        ano : data.getFullYear(),
        mes: escolhaMes,
        nomeDoMes : definirMes(),
        diaDaSemana: definirDia(),
        quantidadeDeDias : quantosDias(),
    }
    inserirMes();
    adicionarDias();
}
}
function calcularDia() {
    if (data.getDate()==data.getDay()) {
        console.log(data.getDate()-data.getDay())
    }
    else{
        for (let index = 1; index < data.getDay(); index++) {
            let novoH = document.createElement('h4')
            let numeroDosDias = document.getElementById("dias-numero");
            numeroDosDias.appendChild(novoH);
        }
    }
}
calcularDia();

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
switch (escolhaMes) {
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
let inserirMes = function() {
    let mesElemento = document.getElementById("mes");
mesElemento.innerHTML = dataHoje.nomeDoMes + "  "+ dataHoje.ano;
}
inserirMes();
//Fim do algoritmo para escrever o mês atual dinamicamente
//Algoritmo para definir quantidade de dias no mês
function quantosDias(){
switch (escolhaMes-1) {
    case 0: return 31;
    break;
    case 1: return 28;
    break;
    case 2: return 31;
    break;
    case 3: return 30;
    break;
    case 4: return 31;
    break;
    case 5: return 30;
    break;
    case 6: return 31;
    break;
    case 7: return 31;
    break;
    case 8: return 30;
    break;
    case 9: return 31;
    break;
    case 10: return 30;
    break;
    case 11: return 31;
    break;
}
}
let count=0;
//Algoritmo para adicionar a quantidade de dias do mês
function adicionarDias() {
    while (count>0) {
    let header4 = document.getElementById("header"+count);
    let numeroDosDias = document.getElementById("dias-numero");
    numeroDosDias.removeChild(header4)
    count--
    }
for (let index = 1; index <= dataHoje.quantidadeDeDias; index++) {
    count++
    let novoH = document.createElement('h4')
    novoH.setAttribute("id","header"+index);
    let numeroDosDias = document.getElementById("dias-numero");
    novoH.innerHTML = index;
    numeroDosDias.appendChild(novoH);
}
}
adicionarDias();
//Fim do algoritmo




