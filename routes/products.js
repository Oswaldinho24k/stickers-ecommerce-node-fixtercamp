const router = require('express').Router()
const Product = require('../models/Product')

//lista
router.get('/',(req, res)=>{
  Product.find({inStock:true})
    .then(products=>{
      res.render('products/list',{products})
    }).catch(e=>res.render('error'))
})

//detalle

//formulario

module.exports = router

