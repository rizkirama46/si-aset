const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_aset'
});
 
connection.connect((err)=> {
  if(err) throw err
  console.log('Database Connected');
});

module.exports = connection
 
