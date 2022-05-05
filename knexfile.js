module.exports = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './music.db3'
    },
    useNullAsDefault: true,    
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }  
  },
};
