const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

app.get('/api/nombres', (req, res) => {
    res.send('Integrantes: Tu Nombre y Nombre De Tu Compañero');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
