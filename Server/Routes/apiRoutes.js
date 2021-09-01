const express = require('express');
const router = express.Router();
const db = require('../Models/apiModel.js');



// Retrieve Product ID & Related Product ID
router.get('/related', (req,res) => {
  var currentID = req.query.id;
  db.getRelatedProducts(currentID, (callback) => {
    res.send(callback)
  })
})

// Post to database
router.post('/related', (req,res) => {
  var param = [req.body.id, req.body.current_product_id, req.body.related_product_id];
  db.postRelatedProducts(param, (err) => {
    if (err) {
      console.log(err)
    }
      res.send('entry added..')
  })
})

module.exports = router;