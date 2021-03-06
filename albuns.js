const express = require('express');
const router = express.Router();

const dbKnex = require("./db_config");

router.use(express.json());


router.get("/", async (req, res) => {
    try {
        
        const albuns = await dbKnex("albuns").orderBy("id", "desc");
     
        res.status(200).json(albuns);
    } catch (error) {
        res.status(400).json({ msg: error.message }); 
    }
});


router.get("/gravadoras", async (req, res) => {
    try {
        const albuns = await dbKnex("albuns as a").select("a.id", "titulo", "ano", "Cantor", "nome as nome_Gravadora")
            .innerJoin('gravadoras', 'gravadora_id', 'gravadoras.id');
        res.status(200).json(albuns); 
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});



//    Inclui


router.post("/", async (req, res) => {

    const { titulo, cantor, ano, vendas, gravadora_id } = req.body;


    if (!titulo || !cantor || !ano || !vendas|| !gravadora_id) {
        res.status(400).json({ msg: "Informar todos os dados" });
        return;
    }


    try {

        const novo = await dbKnex("albuns").insert({ titulo, cantor, ano, vendas,gravadora_id });
        res.status(201).json({ id: novo[0] });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// Atualiza

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { titulo, cantor, ano, vendas } = req.body; 
    const albuns = await dbKnex("albuns").orderBy("id", "desc");
    try {

        await dbKnex("albuns").update({ titulo, cantor, ano, vendas }).where("id", id); 
        res.status(200).json(albuns);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// Deleta

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const albuns = await dbKnex("albuns").orderBy("id", "desc");
    try {
        await dbKnex("albuns").del().where({ id });
        res.status(200).json(albuns);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});


// Verificar erro na busca
router.get("/discos", async (req, res) => {
    try {
        const numdiscos = await dbKnex("albuns").select("titulo").count({ num: "id" }).groupBy("cantor");
        res.status(200).json(numdiscos);

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});





router.get("/pesquisa/:palavra", async (req, res) => {
    const { palavra } = req.params;
    try {
        const albuns = await dbKnex("albuns").select("titulo","cantor","vendas").where("titulo", "like", `%${palavra}%`).orWhere("cantor", "like", `%${palavra}%`)
        res.status(200).json(albuns); 
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});



router.get("/cantores", async (req, res) => {
    try {
     
      const albuns = await dbKnex("albuns").select("titulo","cantor","vendas").count({ Totaldisco: "id" }).groupBy("cantor");
      res.status(200).json(albuns);
     
    } catch (error) {
      res.status(400).json({ msg: error.message }); 
    }
  });



  router.put("/alt/:year/:artist", async (req, res) => {
    const { year, artist } = req.params;
    try{
        await dbKnex("albuns").update("ano", year).where("cantor" ,artist)
        res.status(200).json();
    }catch(error){
        res.status(400).json({ msg: error.message }); 
    }


});

module.exports = router;