const mongoose = require('mongoose');
//tabela do usuario que tera somente email
const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, //para guardar o id do usuário que criou esse spot
    ref: 'User' //para qual model ele vai se referenciar
  }
}, {
  toJSON: {
    virtuals: true,
  }
});

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`
})

//exportando o modulo user para o mongoose entender que tem que usar o Schema User
module.exports = mongoose.model('Spot', SpotSchema);