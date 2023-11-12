// src/server.ts
import express from 'express';

const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde la función serverless de Netlify con TypeScript!' });
});

// Configuración para Netlify Functions
export default app;