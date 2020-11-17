const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    num_tel: {type: String},
    prenom: {type: String},
    nom: {type: String}
});


// Export the model
module.exports = mongoose.model('Contact', ContactSchema);