const express = require('express');
const router = express.Router();

const dbKnex = require("./db_config");


router.use(express.json());


router.get("/", async (req, res) => {
  try {
    const gravadoras = await dbKnex("gravadoras").orderBy("id", "desc");
    res.status(200).json(gravadoras); 
  } catch (error) {
    res.status(400).json({ msg: error.message }); 
  }
});


router.post("/", async (req, res) => {
  const gravadoras = await dbKnex("gravadoras").orderBy("id", "desc");
  const { nome, contato } = req.body;


  if (!nome || !contato) {
    res.status(400).json({ msg: "Enviar todos os Dados" });
    return;
  }

 
  try {
    
    const novo = await dbKnex("gravadoras").insert({ nome, contato });
    res.status(201).json({ id: novo[0] }); 
  } catch (error) {
    res.status(400).json({ msg: error.message }); 
  }
});

module.exports = router;  
