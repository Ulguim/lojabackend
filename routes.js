const express = require("express");
const routes = express.Router();



const GravadoraController = require("./controllers/GravadorasController");
const AlbunsController = require("./controllers/AlbunsController")

routes.get("/gravadoras", GravadoraController.index)
      .post("/gravadoras", GravadoraController.store);

routes.get("/albuns/gravadoras", AlbunsController.index)
      .post("/albuns", AlbunsController.store)
      .put("/albuns/:id",AlbunsController.updateById)
      .delete("/albuns/:id",AlbunsController.deleteById)
      .get("/albuns/cantores",AlbunsController.discCount)
      .get("albuns/pesquisa/:palavra",AlbunsController. discByWord)


module.exports = routes;
