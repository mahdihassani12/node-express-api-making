const express = require("express");
const router = express.Router();
const controller = require("../controllers/crmController");

router.get('/', controller.getContacts);
router.get('/:contactId', controller.getContact);
router.post('/', controller.addContacts);
router.put('/:contactId', controller.updateContacts);
router.delete('/:contactId', controller.deleteContacts);

module.exports = router;