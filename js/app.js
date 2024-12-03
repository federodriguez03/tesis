const express = require('express');
const pool = require('./db'); // Archivo de configuración de la base de datos

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para obtener todas las mascotas
app.get('/mascotas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mascota'); // Cambia 'mascotas' por el nombre real de tu tabla
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener las mascotas:', error);
    res.status(500).send('Error al obtener las mascotas');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});