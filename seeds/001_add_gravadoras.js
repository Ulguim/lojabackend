
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('gravadoras').del()
  await knex('gravadoras').insert([
    
    {nome: "Avalanche Recordings",contato:"kevinavalanche@hotmail.com"},
    {nome: "Vertigo Records",contato:"vertigorecords@gmail.com"},
    

    
  ]);
};
