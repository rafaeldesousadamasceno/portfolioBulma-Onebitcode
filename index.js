class Espaconave {
    constructor (name, qtdTripulantes) {
        this.name = name;
        this.qtdTripulantes = qtdTripulantes;
        this.engatar = false;
        this.abrirPorta = false;
    }

    engatarNave(){
        this.engatar = true;
        this.abrirPorta = true;
    }
}

function listarNaves(lista) {
    let listagem = ""
    lista.forEach(element => {
        listagem += `${element.name} - ${element.qtdTripulantes} tripulantes\n`
    });

    return listagem;
}

let estacao = [];

do {
    var opcao = window.prompt("Escolha uma das opções abaixo: \n1. Engatar Nave\n2. Listar Naves \n3. Sair");
    if (opcao == 1) {
        let nomeNave = window.prompt("Digite o nome da Nave: ");
        let qtdTripulacao = window.prompt("Digite a quantidade de tripulantes: ")
        let novaNave = new Espaconave(nomeNave, qtdTripulacao);
        novaNave.engatarNave();
        estacao.push(novaNave);
    } else if (opcao == 2) {
        alert(listarNaves(estacao));
    }
} while (opcao != 3);
