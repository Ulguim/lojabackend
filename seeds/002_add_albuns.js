
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albuns').del()
  await knex('albuns').insert([
    
    {titulo: "A World Lit Only by Fire",cantor:"Godflesh",ano:"2014",vendas:10000.01,gravadora_id:1},
    {titulo: "Rosenrot",cantor:"Rammstein",ano:"2005",vendas:10014.26,gravadora_id:2},

    
  ]);
};
