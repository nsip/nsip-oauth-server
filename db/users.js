var db = require('./db');

var resultToUser = function(err, result, done) {
    if (err || result.length != 1) {
        done(err, false);
    } else {
        var user = result[0];

        if (!user.name)
            user.name = user.username;

        done(false, user);
    }
};

exports.find = function(id, done) {
    db(function(c) {
        c.query('SELECT * FROM users WHERE id = ?',
                [id], function(err, result) {
                    resultToUser(err, result, done);
                });
    });
};

exports.findByUsername = function(username, done) {
    db(function(c) {
        c.query('SELECT * FROM users WHERE username = ?',
                [username], function(err, result) {
                    resultToUser(err, result, done);
                });
    });
};
