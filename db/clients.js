var db = require('./db');

exports.findByClientId = function(clientId, done) {
    db(function(c) {
        c.query('SELECT client_id, client_secret, redirect_uri FROM oauth_clients WHERE ' +
                'client_id = ?', [clientId], function(err, result) {
                    if (err || !result) {
                        done(err, false);
                    } else {
                        var client = {
                            id:           clientId,
                            name:         clientId,
                            clientId:     result[0].client_id,
                            clientSecret: result[0].client_secret,
                            redirectURI:  result[0].redirect_uri
                        };
                        done(false, client);
                    }
                });
    });
};

exports.find = exports.findByClientId;

