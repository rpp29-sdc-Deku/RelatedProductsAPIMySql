DROP DATABASE IF EXISTS RelatedAPI;
CREATE DATABASE RelatedAPI;

USE RelatedAPI;

CREATE TABLE related (
  id INT PRIMARY KEY,
  current_product_id INT NOT NULL,
  related_product_id INT NOT NULL
);

LOAD DATA LOCAL INFILE
'./related.csv'
INTO TABLE related
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'



/*  Execute this file from the command line by typing:
 *  Line above will create new tables each time this is run in the mysql terminal
 *    mysql -u root < /Users/isaackim/Desktop/Rpp29/deku-api/RelatedProductsAPI/schema.sql
 *  to create the database and the tables.*/
