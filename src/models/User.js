const mongoose = require('mongoose');
//tabela do usuario que tera somente email
const UserSchema = new mongoose.Schema({
  email: String
})

//exportando o modulo user para o mongoose entender que tem que usar o Schema User
module.exports = mongoose.model('User', UserSchema);