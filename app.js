//Autor: Víctor Ortiz Cerón
//Tarea extra clase III

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
var resultado;

app.get('/', (req, res) => {
  res.render("calculadora", {RESULTADO:resultado});
});


app.post('/', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operator = req.body.operator;
  
  
  switch (operator) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      resultado = 'Operación Inválida';
  }

  res.redirect("/");
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});