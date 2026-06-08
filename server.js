const express = require('express');
const app = express();

// 1. Ruta para la página principal (GET)
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando correctamente en la nube!');
});

// 2. Ruta para ver la página de registro (GET)
app.get('/registro', (req, res) => {
    res.send('Aquí se mostrará el formulario de registro');
});

// 3. Ruta para recibir los datos del formulario (POST)
app.post('/registro', (req, res) => {
    // Esto se queda listo para cuando envíes datos reales
    res.end();
});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});
// 4. Encendido del servidor
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});