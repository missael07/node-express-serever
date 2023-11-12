// src/server.ts
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/init', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});