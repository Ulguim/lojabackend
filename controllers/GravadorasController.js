const dbKnex = require("../db_config");  // dados de conexão com o banco de dados

module.exports = {

    // Lê gravadoras
    async index(req, res) {
        try {
            const gravadoras = await dbKnex("gravadoras").orderBy("id", "desc");
            res.status(200).json(gravadoras);
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    // Armazena Gravadoras
    async store(req, res) {
        
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


    }
}