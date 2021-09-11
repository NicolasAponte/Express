var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Instala mongoose plugin
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
  //Plugin agrega automáticamente username y password
  admin: {
    type: Boolean,
    default: false
  }

});
//Plugin brinda soporte a username, password y hash
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);