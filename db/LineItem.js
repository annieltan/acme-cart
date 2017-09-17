var db = require('./conn');

var LineItem = db.define('lineitem', {
  quantity: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})




module.exports = LineItem
