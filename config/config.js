


var env = process.env.NODE_ENV || 'development';

var config = require('./config.json');

var envConfig = config[env];

//This will return an enumerable collection of keys containing 
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);



