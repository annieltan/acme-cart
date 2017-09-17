var Sequelize = require('sequelize');
var conn = new Sequelize(process.env.DATABASE_URL);

conn.authenticate()
  .catch(err => console.log(er));

module.exports = conn;
