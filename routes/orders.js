const Order = require('../db').Order;
const router = require('express').Router();

module.exports = router;

router.get('/ugh', (req, res, next)=>{
  console.log('getting this');
})

router.put('/:id', (req, res, next)=> {
  console.log('UASDADMM')
  Order.updateFromRequestBody(req.params.id, req.body)
    .then( () => res.redirect('/'))
    .catch(ex => {
      if(ex.message === 'address required'){
        return res.render('index', { error: ex });
      }
      next(ex);
    });
});

router.post('/:id/lineItems', (req, res, next)=> {

  console.log('heyheyhey', req)

  Order.addProductToCart(req.body.productId*1)
    .then( (results)=> {
      res.redirect('/')})
    .catch(next);
});

router.delete('/:orderId/lineItems/:id', (req, res, next)=> {
  Order.destroyLineItem(req.params.orderId, req.params.id)
    .then( ()=> res.redirect('/'))
    .catch(next);
});
