var contactService = require('../services/ContactService')
var express = require('express');
var router = express.Router();

//read all contacts
router.get('/getContact', contactService.getContact);
router.post('/create', contactService.createContact);
router.put('/updateContact/:num_tel', contactService.updateContact);
router.delete('/deleteContact/:num_tel', contactService.deleteContact);
module.exports = router;

