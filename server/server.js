const express = require('express');
const helpers = require("../mysql-database/index.js")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;


// routes
app.get("/", (req, res) => {
  res.send('welcome to isaacs api')
})

app.post("/post", (req, res) => {
 var param = [req.body.id, req.body.current_product_id, req.body.related_product_id];
 helpers.relatedProducts(param, (err) => {
   if (err) {
     console.log(err)
   }
     res.send('entry added')
 })
})

app.listen(PORT, () => {
  console.log(` Server is running on port: ${PORT}`)
})