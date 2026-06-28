const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/incidencias', (req, res) => {
  res.json([
    { id: 1, tipo: 'Basura', estado: 'Pendiente' },
    { id: 2, tipo: 'Alumbrado', estado: 'Resuelto' }
  ]);
});

app.post('/incidencias', (req, res) => {
  const incidencia = req.body;

  res.json({
    mensaje: 'Incidencia recibida',
    datos: incidencia
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
