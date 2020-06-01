let jwt = require("jsonwebtoken");

let key = "ioiy aig";

let token = jwt.sign({
  name: "xieying",
  age: 24,
  sex: "m",
}, key, {
  expiresIn: 60
});

console.log(token)

module.exports = {
  token
}