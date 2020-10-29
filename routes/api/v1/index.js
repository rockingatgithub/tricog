const express = require("express");
const router = express.Router();
const passport = require('passport');

let customerController = require("../../../controllers/customercontrollers");

router.post("/create", customerController.createcustomer);
router.post("/signin",  customerController.customersignin);
router.get("/getCustomer/:id", passport.authenticate('jwt', {session: false}), customerController.customerinfo)

module.exports = router;
