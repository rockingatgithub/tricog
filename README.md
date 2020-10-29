# TRICOG_TEST_API

An customers API for storing data about customers and fetching data.

## Installation

> Clone the [repo](https://github.com/rockingatgithub/tricog).
> Make sure you have mysql server installed.

Open terminal in project directory and run below command in terminal or cmd.

```bash
 npm install
 npm start
```

## Usage

Use Postman for fetching data through API.
go through the routes folders for different routes.

You need to create a customer with 'http://15.207.254.140/api/v1/create'
Give first_name, pan_number, dob, gender, email, profile_image form field to add a acustomer.

### Access token

To generate access token goto 'http://15.207.254.140/api/v1/signin' route.
Give email as form field to generate token.

### Note:-

> You need to use this token as 'Authorization' : Bearer 'token' as header.
> Keep generating new token every 100 seconds you can change this time in
> config jwt_strategy file.

## Routes

- Get customers route
  - http://15.207.254.140/api/v1/getCustomer/{id} , replace id with id of customer obtained from the database to get the information. Set the 'Authorization' header as 'Bearer {token}'. Replace the token with the token obtained in signin route.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
