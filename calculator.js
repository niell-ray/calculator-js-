const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get("/bmicalculator", function(req, res){
  res.send("<h1>BMI Calculator</h1>");
});

app.post("/bmicalculator", function(req, res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1/(num2*num2);

  res.send("your BMI is "+result);
});

app.listen(3000, function(){
  console.log("server 3000 has been initiated.")
});
