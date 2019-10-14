const mongoose = require('mongoose');
//tabela do usuario que tera somente email
const BookingSchema = new mongoose.Schema({
  data: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId, //para guardar o id do usuário que criou esse Booking
    ref: 'User' //para qual model ele vai se referenciar
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

//exportando o modulo user para o mongoose entender que tem que usar o Schema User
module.exports = mongoose.model('Booking', BookingSchema);