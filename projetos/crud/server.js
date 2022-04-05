const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const routePessoa = require("./app/routes/PessoaRoute.js");
const routeProduto = require("./app/routes/ProdutoRoute.js");

var corsOptions = {
  //origin: "http://localhost:8080",
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.use("/pessoas", routePessoa);
app.use("/produtos", routeProduto);

const PORT = 3000; //process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server executando na porta ${PORT}`);
});
