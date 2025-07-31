# 🧪 Prueba Técnica Full Stack

Aplicación Full Stack desarrollada con Node.js, Express, PostgreSQL y React. Incluye autenticación con JWT, roles, operaciones CRUD, pruebas unitarias y dockerización.

---

## 🧰 Tecnologías utilizadas

### Backend
- Node.js + Express
- PostgreSQL
- JWT para autenticación
- Bcrypt para encriptación
- Jest para testing

### Frontend
- React (SPA)
- React Router DOM
- Context API para autenticación
- React Testing Library para pruebas

### Otros
- Docker + Docker Compose
- Dotenv
- ESLint

---

## 📦 Instalación local

### 1. Clonar el repositorio

```bash

cd prueba-fullstack

PORT=3001
JWT_SECRET=tu_clave_secremi_clave_secreta_super_segura
DB_USER=postgres
DB_PASSWORD=admin123
DB_HOST=localhost
DB_PORT=5432
DB_NAME=prueba_fullstack

REACT_APP_API_URL=http://localhost:3001

-- crea la base
CREATE DATABASE prueba_fullstack;

-- importa las tablas y datos iniciales
-- puedes usar pgAdmin o psql con el archivo `database/schema.sql`

cd backend
npm install
node index.js

cd frontend
npm install
npm run start

🧪 Pruebas
Backend (Jest)
bash
Copiar
Editar
cd backend
npm test
Frontend (React Testing Library)
bash
Copiar
Editar
cd frontend
npm test
🐳 Dockerización
1. Crear archivo .env (ya descrito arriba)
2. Ejecutar con Docker Compose
bash
Copiar
Editar
docker-compose up --build
Esto levantará:

El backend (puerto 3001)

El frontend (puerto 3000)

PostgreSQL (puerto 5432)

👥 Roles y usuarios
ADMIN: puede ver, crear, editar y eliminar usuarios.

USER: acceso limitado a su propio perfil.

📁 Estructura del proyecto
pgsql
Copiar
Editar
prueba-fullstack/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── tests/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── context/
│   └── public/
├── database/
│   └── schema.sql
└── docker-compose.yml
✅ Funcionalidades
Registro y login con JWT

CRUD de usuarios con roles

Panel de administración

Seguridad básica (bcrypt + JWT)

Dockerización completa

Desarrollado por Tatiana Castro

tatiselka25@gmail.com
