var mysql = require('mysql'),
    config = require('./config');

module.exports = function(callback) {
    var c = mysql.createConnection({
        host: config.get('mysql_host'),
        user: config.get('mysql_user'),
        password: config.get('mysql_password'),
        database: config.get('mysql_database')
    });

    c.connect();
    callback(c);
    c.end();
};

