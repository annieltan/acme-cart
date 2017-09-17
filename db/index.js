var db = require('./conn');
var Product = require('./Product');
var Order = require('./Order');
var LineItem = require('./LineItem');

var seed = function(){
  return Promise.all([
  Product.create({name: 'squishy boba'}),
  Product.create({name: 'lonely boba'}),
  Product.create({name: 'happy boba'})])
  .then(([_big, _medium, _tiny])=>{
    var big, medium, tiny
    big = _big
    medium = _medium
    tiny = _tiny
    console.log(big, medium, tiny)
  })
};

LineItem.belongsTo(Product);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);


db.sync({ force: true })
  .then(()=>{
    console.log('synced')
    seed()
  })

module.exports = {Product, Order, LineItem}
