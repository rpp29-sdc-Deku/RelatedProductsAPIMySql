const mysql = require("mysql")
const mysqlConfig = require('../../config.js')

//create connection paramaters
const connection = mysql.createConnection({
  host: mysqlConfig.HOST,
  user: mysqlConfig.USER,
  database: mysqlConfig.DATABASE
})

// connect to database
connection.connect(error => {
  if (error) {
    console.log('error in mysql connection..')
  } else {
    console.log('You have connected to mysql database successfully..')
  }
})

//helper function that gets related product ids from database with pid
const getRelatedProducts = function (pid, callback) {
  const queryString = `SELECT related_product_id from relatedID WHERE current_product_id = ${pid};`;
  connection.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      let relatedIdArray = []
      results.map(ids => {
        relatedIdArray.push(ids.related_product_id)
      })
      callback(relatedIdArray);
    }
  });
};

  //helper function that post param string to mysql database
  const postRelatedProducts = function (param, callback) {
    var queryStr = 'INSERT INTO relatedID (id, current_product_id, related_product_id) VALUES (?, ?, ?)';
    connection.query(queryStr, param, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(result)
    }
  })
}

module.exports = {
  postRelatedProducts,
  getRelatedProducts
}