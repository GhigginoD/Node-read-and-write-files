const path = require("path");
const pathfile = path.resolve(__dirname, 'dados.json'); 
const utils  = require("./utils");

async function getDados() {
    const data  = [
        {"nome": "Davi", "saldo": 210.50},
        {"nome": "João", "saldo": 0},
        {"nome": "Anna", "saldo": -15.45},
        {"nome": "Maria", "saldo": 26.67}
    ]
    const json = JSON.stringify(data, "", 1);
    return json;
}

async function startNewFile(path) {
    const dados  = await getDados();
    utils.createFile(path, dados);
    return readFile(path)

}

async function readFile(path) {
    const dados = await utils.readFile(path);
    return dados;
}

startNewFile(pathfile)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));