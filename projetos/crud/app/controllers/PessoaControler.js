const db = require("../models");
const Pessoa = db.pessoa;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const pessoa = {
  };

  Pessoa.create(pessoa)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send({
        message: err.message || "Some error occurred while create the Pessoa",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;

  Pessoa.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Pessoa",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Pessoa.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao carregar pessoa id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Pessoa.update(req.body, {
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Pessoa atualizada",
      });
    } else {
      res.send({
        message: `Pessoa não pode ser atualizada id=${id}`,
      });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Pessoa.destroy({
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Pessoa excluída!",
      });
    } else {
      res.send({
        message: `Pessoa não pode ser excluída id=${id}`,
      });
    }
  });
};
