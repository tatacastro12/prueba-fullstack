// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./router/auth');
const userRoutes = require('./router/userRoutes');
const solicitudRoutes = require('./router/solicitudRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/solicitudes', solicitudRoutes);

app.get('/', (req, res) => {
  res.send('API Fullstack funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
