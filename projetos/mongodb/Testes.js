// Para maiores detalhes, consulte: https://www.w3schools.com/nodejs/nodejs_mongodb.asp


var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:123456@localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("vendas");
    var mysort = { nome: 1 };
    dbo.collection("pessoas").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});