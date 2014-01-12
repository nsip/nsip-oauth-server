var db = require('./db');

exports.find = function(bearerToken, done) {
    db(function(c) {
        c.query('SELECT access_token, client_id, expires, user_id FROM oauth_access_tokens ' +
                'WHERE access_token = ?', [bearerToken], function(err, result) {
                    if (err || !result) {
                        done(err, false);
                    } else {
                        var token = {
                            userID: result[0].user_id,
                            clientID: result[0].client_id,
                            expires: result[0].expires
                        };
                        done(false, token);
                    }
                });
    });
};

exports.save = function(token, userID, clientID, done) {
    db(function(c) {
        c.query('INSERT INTO oauth_access_tokens(access_token, client_id, user_id) ' +
                'VALUES (?, ?, ?)', [token, clientID, userID],
                function(err, result) {
                    done(err);
        });
    });
};

