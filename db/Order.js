var db = require('./conn');
var LineItem = require('./LineItem')

var Order = db.define('order', {
  address: {
    type: db.Sequelize.STRING
  },
  isCart: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
})

Order.updateFromRequestBody = function(id, content){

};

Order.addProductToCart = function(productId){
  console.log('yo')
  return Order.create({
    isCart: true
  })
  .then((results)=>{
    return LineItem.create({
      quantity: 1,
      productId: productId,
      OrderId: results.id
    })
  })
};

Order.destroyLineItem = function(orderId, productId){

};

module.exports = Order
