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
    if (data.getDate(0)!=data.getDay()) {
        for (let index = 1; index < data.getDay(); index++) {
            let novoTd = document.createElement('td')
            let numeroDosDias = document.getElementById("semana1");
            numeroDosDias.appendChild(novoTd);
    }
}}
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
let semanaAtual = 1;

//Algoritmo para adicionar a quantidade de dias do mês
function adicionarDias() {
    while (count>0) {
    let td = document.getElementById("td"+count);
    let semana = document.getElementById("semana"+semanaAtual);
    semana.removeChild(td);
    if(count==29){semanaAtual--;}        
    if(count==22){semanaAtual--;}  
    if(count==15){semanaAtual--;}        
    if(count==8){semanaAtual--;}        
    count--
    }
for (let index = 1; index <= dataHoje.quantidadeDeDias; index++) {
    count++
    let novoTd = document.createElement('td')
    novoTd.setAttribute("id","td"+index);
    if(index==8){semanaAtual++}
    if(index==15){semanaAtual++}
    if(index==22){semanaAtual++}
    if(index==29){semanaAtual++}
    let semana = document.getElementById("semana"+semanaAtual);
    novoTd.innerHTML = index;
    semana.appendChild(novoTd);
}
}
adicionarDias();
//Fim do algoritmo