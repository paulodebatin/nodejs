const db = require("../models");
const Produto = db.produto;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const Produto = {
  };

  Produto.create(Produto)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send({
        message: err.message || "Some error occurred while create the Produto",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;

  Produto.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Produto",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao carregar Produto id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Produto.update(req.body, {
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Produto atualizada",
      });
    } else {
      res.send({
        message: `Produto não pode ser atualizada id=${id}`,
      });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Produto.destroy({
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Produto excluída!",
      });
    } else {
      res.send({
        message: `Produto não pode ser excluída id=${id}`,
      });
    }
  });
};
