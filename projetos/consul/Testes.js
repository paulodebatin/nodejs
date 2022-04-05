// Para maiores informações: https://github.com/gjohnson/consul-node

var Consul = require("consul-node");

var consul = new Consul({
    host: 'localhost',
    port: 8500,
});

var chave = "produto_1";
var produto = { id: 1, descricao: "Caneta", preco: 10.32, quantidade: 123 }

async function run () {
    await consul.kv.put(chave, JSON.stringify(produto), function (err, ok) {
        if (err) throw err;
    });

    await consul.kv.get(chave, function (err, produtoCarregado) {
        if (err) throw err;

        var produtoCarregado = JSON.parse(produtoCarregado[0].value);
        console.log(produtoCarregado.id);
        console.log(produtoCarregado.descricao);
        console.log(produtoCarregado.preco);
        console.log(produtoCarregado.quantidade);
    });
}    

run().catch(console.log)