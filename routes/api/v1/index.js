const express = require("express");
const router = express.Router();

let customerController = require("../../../controllers/customercontrollers");

router.post("/create", customerController.createcustomer);

module.exports = router;
