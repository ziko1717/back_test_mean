const contactDTO = require("../DTO/contactDTO");

//read all contacts
exports.getContact = function (req, res) {
 contactDTO.find(function(err, contacts) {
    if (err) return next(err);
        res.send(contacts);
 });
  
  };
//create a contact
exports.createContact = function (req, res) {
    let contact = new contactDTO(
        {
            num_tel: req.body.num_tel,
            prenom: req.body.prenom,
            nom: req.body.nom
        }
    );

    contact.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Contact Created successfully')
    })
};
//update a contact by id
exports.updateContact = function (req, res) {
    var query = {num_tel : req.params.num_tel}
    contactDTO.findOneAndUpdate(query, {$set: req.body}, function (err) {
        if (err) return next(err);
        res.send('Contact udpated.');
    });
};
//delete contact by id
exports.deleteContact = function (req, res) {
    var query = {num_tel : req.params.num_tel}
    contactDTO.findOneAndDelete(query, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};