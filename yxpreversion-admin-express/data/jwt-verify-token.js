let jwt = require("jsonwebtoken");

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieGlleWluZyIsImFnZSI6MjQsInNleCI6Im0iLCJpYXQiOjE1ODk1MDMyNjcsImV4cCI6MTU4OTUwMzMyN30.k3GB48MtU6Lmp0uCjzcB8qncdVy-U79e_F5rKJQSMUY"

let key = "ioiy aig";

jwt.verify(token, key, function(err, decoded) {
  console.log(decoded)
});

