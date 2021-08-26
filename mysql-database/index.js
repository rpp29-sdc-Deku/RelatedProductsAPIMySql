const mysql = require("mysql")
const mysqlConfig = require("./config.js")

//create connection paramaters
const connection = mysql.createConnection({
  host: mysqlConfig.HOST,
  user: mysqlConfig.USER,
  database: mysqlConfig.DATABASE
})

// connect to database
connection.connect(error => {
  if (error) {
    console.log('error in mysql connection')
  } else {
    console.log('You have connected to mysql database successfully')
  }
})

  const relatedProducts = function (param, callback) {
    var queryStr = 'INSERT INTO related (id, current_product_id, related_product_id) VALUES (?, ?, ?)';
    connection.query(queryStr, param, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(result)
    }
  })
}

module.exports = {
 relatedProducts
}
