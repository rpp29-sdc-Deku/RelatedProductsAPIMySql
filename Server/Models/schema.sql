DROP DATABASE IF EXISTS RelatedAPI;
CREATE DATABASE RelatedAPI;

USE RelatedAPI;

CREATE TABLE relatedID (
  id INT PRIMARY KEY,
  current_product_id INT,
  related_product_id INT
);


LOAD DATA LOCAL INFILE
'./related.csv'
INTO TABLE relatedID
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'

