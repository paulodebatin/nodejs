// Para maiores informações, acessar:
// https://kb.objectrocket.com/redis/nodejs-and-redis-example-1149
// https://www.sitepoint.com/using-redis-node-js/

var redis = require("redis");
var client = redis.createClient(6379,"localhost");

var chave = "produtos#1";

client.hmset(chave, { id: 1, descricao: "Caneta", preco: 10.32, quantidade: 123 });

client.hgetall(chave, function(err, object) {
    console.log(object.id);
    console.log(object.descricao);
    console.log(object.preco);
    console.log(object.quantidade);
  });


  

