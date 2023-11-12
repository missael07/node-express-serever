"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/hello', (req, res) => {
    res.json({ message: '¡Hola desde la función serverless de Netlify con TypeScript!' });
});
// Configuración para Netlify Functions
exports.default = app;
