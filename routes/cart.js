const router = require('express').Router() //parenthesis needed

router.post('/add', (req, res)=>{
  const {cart} = req.app.locals
  const {productId} = req.body
  cart[productId] ? cart[productId]++ : cart[productId] = 1
  console.log(cart)
  res.redirect('back')
})

//restar

//mostrar el carrito



module.exports = router