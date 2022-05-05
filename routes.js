const express = require("express");
const routes = express.Router();



const GravadoraController = require("./controllers/GravadorasController");


routes.get("/gravadoras", GravadoraController.index)
      .post("/gravadoras", GravadoraController.store);

module.exports = routes;
