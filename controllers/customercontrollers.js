const sql = require("../config/dbconnect");

const Customer = function (customer) {
  this.first_name = customer.first_name;
  this.pan_number = customer.pan_number;
  this.dob = customer.dob;
  this.gender = customer.gender;
  this.email = customer.email;
  this.profile_image = customer.profile_image;
};

module.exports.createcustomer = async function (req, response) {
  let newCustomer = new Customer(req.body);
  let newid = 0;
  sql.query("INSERT INTO testcustomers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      return response.status(401).json({
        message: "An error occured",
      });
    }
    return response.status(200).json({
      message:
        "employee created successfully...store the id for future reference",
      data: {
        id: res.insertId,
        ...newCustomer,
      },
    });
  });
};
