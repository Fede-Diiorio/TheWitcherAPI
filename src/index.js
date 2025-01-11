import express from 'express';
const app = express();

import routerMonsters from './routers/beasts.router.js';

// Middleware
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API con Node.js y MySQL!');
});

app.use('/api/monsters', routerMonsters)

// Iniciar el servidor
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
