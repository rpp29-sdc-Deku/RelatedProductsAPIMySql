const express = require('express');
const router = express.Router();
const db = require('../Models/apiModel.js');



// Retrieve Product ID & Related Product ID
router.get('/related', (req,res) => {

  let productID = req.query.id
  //if no _id is added defaults to first item in database
  if (req.query.id === undefined) {
    productID = 1
  }
  db.getRelatedProducts(productID, (callback) => {
    res.send(callback)
  })
})

module.exports = router;