const convict = require('convict'),
      fs = require('fs'),
      path = require('path');

var conf = module.exports = convict({
    mysql_server: { format: 'string' },
    mysql_user: { format: 'string' },
    mysql_password: { format: 'string' },
    mysql_database: { foramt: 'string', default: 'oauth' }
});

var config_path = path.join(process.cwd(), 'config', 'local.json');

var c = JSON.parse(fs.readFileSync(config_path, 'utf8'));
conf.load(c);

