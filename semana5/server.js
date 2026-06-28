const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola! Bienvenido a mi API con Express.');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
