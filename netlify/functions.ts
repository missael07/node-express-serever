// netlify/function.ts
import app from '../src/server';

// Configuración para Netlify Functions
exports.handler = async (event, context) => {
  return app(event, context);
};