const bcrypt = require('bcrypt');

module.exports = encryptPassword = (password) => bcrypt.hashSync(password, 10);


