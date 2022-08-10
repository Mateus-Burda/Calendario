let escolhaAno = 2022;
let escolhaMes = 8;
const escolhaDia = 01;


var data = new Date(escolhaAno,escolhaMes-1,escolhaDia);
//função do botão
let btnProximo=document.getElementById("btn-proximo");
btnProximo.onclick = function proxMes(){
    escolhaMes++;
    data = new Date(escolhaAno,escolhaMes-1,escolhaDia);
    inserirMes();
    inserirDias();
    destacarHoje()

}
let btnVoltar=document.getElementById("btn-voltar");
btnVoltar.onclick = function proxMes(){
    escolhaMes--;
    data = new Date(escolhaAno,escolhaMes-1,escolhaDia);
    inserirMes();
    inserirDias();
    destacarHoje()

}
;;
//fim botão

//função para inserir o mês selecionado
let inserirMes = function() {
    let mesElemento = document.getElementById("mes");
    let nomeDoMes;
    switch (data.getMonth()) {
        case 0: nomeDoMes = "Janeiro"
        break;
        case 1: nomeDoMes = "Fevereiro"
        break;
        case 2: nomeDoMes = "Março"
        break;
        case 3: nomeDoMes = "Abril"
        break;
        case 4: nomeDoMes = "Maio"
        break;
        case 5: nomeDoMes = "Junho"
        break;
        case 6: nomeDoMes = "Julho"
        break;
        case 7: nomeDoMes = "Agosto"
        break;
        case 8: nomeDoMes = "Setembro"
        break;
        case 9: nomeDoMes = "Outubro"
        break;
        case 10: nomeDoMes = "Novembro"
        break;
        case 11: nomeDoMes = "Dezembro"
        break;

    }
    mesElemento.innerHTML = nomeDoMes + "  "+ data.getFullYear();
}
inserirMes();

let semanaAtual = 1;
let count=0;
//função para inserir os dias
let inserirDias = function() {
    //inserir os dias
    let quantidadeDeDias;
    switch (data.getMonth()) {
        case 0: quantidadeDeDias = 31;
        break;
        case 1: quantidadeDeDias = 28;
        break;
        case 2: quantidadeDeDias = 31;
        break;
        case 3: quantidadeDeDias = 30;
        break;
        case 4: quantidadeDeDias = 31;
        break;
        case 5: quantidadeDeDias = 30;
        break;
        case 6: quantidadeDeDias = 31;
        break;
        case 7: quantidadeDeDias = 31;
        break;
        case 8: quantidadeDeDias = 30;
        break;
        case 9: quantidadeDeDias = 31;
        break;
        case 10: quantidadeDeDias = 30;
        break;
        case 11: quantidadeDeDias = 31;
        break;
        
    }
    while(count>0){
        let tdNovo = document.getElementById("dia"+count);
        let semana = document.getElementById("semana"+semanaAtual);
        semana.removeChild(tdNovo)
        count--
        if(count==7){semanaAtual--}
        if(count==14){semanaAtual--}
        if(count==21){semanaAtual--}
        if(count==28){semanaAtual--}
        if(count==35){semanaAtual--}
    }
    for(let index = 1; index<=quantidadeDeDias+data.getDay();index++){
        count++
        if(index==8){semanaAtual++}
        if(index==15){semanaAtual++}
        if(index==22){semanaAtual++}
        if(index==29){semanaAtual++}
        if(index==36){semanaAtual++}
        let semana = document.getElementById("semana"+semanaAtual);
        let novoTd = document.createElement('td');
        novoTd.setAttribute("id","dia"+index)
        semana.appendChild(novoTd);
        if(index>data.getDay()){
            novoTd.innerHTML= index-data.getDay();
        }
    }
    let destacarHoje = function() {
        let dataHoje = new Date()
        let diaHoje = dataHoje.getDate()-1
        let contar = count - quantidadeDeDias +diaHoje+1;
        let elementoHoje = document.getElementById("dia"+contar)
        elementoHoje.classList.add("dia-hoje")
    }
    destacarHoje()
}
inserirDias();

let nomeCidade
let MostrarClima = function(){
fetch("https://api.openweathermap.org/data/2.5/weather?lat=-25.431183&lon=-49.270094&appid=6258033c9bd00e2af0bfec0637c4daab&units=metric&lang=pt_br")
    .then(res => res.json())
    .then(informaçao => {
        console.log(informaçao)
        document.querySelector("#clima").innerHTML = `<h3>${informaçao.name}</h3> <h3>Temperatura:${informaçao.main.temp}</h3> <h3>${informaçao.weather[0].description}</h3>`;     
        console.log()
    })

    
}
MostrarClima()