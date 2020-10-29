const sql = require("../config/dbconnect");
const jwt = require("jsonwebtoken");

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

module.exports.customersignin = async function (req, response) {
  try {
    sql.query(
      `SELECT * FROM testcustomers WHERE email = "${req.body.email}"`,
      (err, res) => {
        if (err) {
          return response.status(401).json({
            message: "User not found in database",
            error: err,
          });
        }

        if (res.length) {
          // console.log(res[0]);
          let obj = {
            id: res[0].id,
            first_name: res[0].first_name,
            pan_number: res[0].pan_number,
            dob: res[0].dob,
            gender: res[0].gender,
            email: res[0].email,
            profile_image: res[0].profile_image,
          };
          return response.status(200).json({
            message:
              "User found with the mail and token for further API calls has been generated keep it safe.",
            data: {
              token: jwt.sign(obj, "customer_api", {
                expiresIn: "1000000",
              }),
            },
          });
        }

        return response.status(401).json({
          message: "User not found",
        });
      }
    );
  } catch (err) {
    return response.status(401).json({
      message: "Server error.",
    });
  }
};

module.exports.customerinfo = async function (req, response) {
  try {
    sql.query(
      `SELECT * FROM testcustomers WHERE id = "${req.params.id}"`,
      (err, res) => {
        if (err) {
          return response.status(401).json({
            message: "User not found in database",
            error: err,
          });
        }

        if (res.length) {
          // console.log(res[0]);
          let obj = {
            id: res[0].id,
            first_name: res[0].first_name,
            pan_number: res[0].pan_number,
            dob: res[0].dob,
            gender: res[0].gender,
            email: res[0].email,
            profile_image: res[0].profile_image,
          };
          return response.status(200).json({
            message: "User found with the id",
            data: {
              ...obj,
            },
          });
        }

        return response.status(401).json({
          message: "User not found",
        });
      }
    );
  } catch (err) {
    return response.status(401).json({
      message: "Server error.",
    });
  }
};
