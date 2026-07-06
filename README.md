# 🩺 PhysioTrack - Backend

Backend de **PhysioTrack**, una API REST desarrollada para gestionar la autenticación de usuarios de la plataforma mediante JSON Web Tokens (JWT).

Este proyecto corresponde al backend de la aplicación y actualmente implementa el módulo de autenticación como parte del MVP (Producto Mínimo Viable).

---

# 📖 Descripción

El backend permite registrar usuarios, iniciar sesión de forma segura y obtener la información del usuario autenticado mediante un Token JWT.

Está desarrollado con Node.js, Express y MongoDB siguiendo una arquitectura organizada por capas para facilitar su mantenimiento y escalabilidad.

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv
- Cors

---

# 📂 Estructura del proyecto

```
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
└── app.js
```

---

# ✨ Funcionalidades implementadas

- Registro de usuarios
- Inicio de sesión
- Generación de Token JWT
- Obtención del perfil del usuario autenticado
- Protección de rutas mediante JWT
- Encriptación de contraseñas con bcrypt

---

# 🏛 Arquitectura

El proyecto utiliza una arquitectura en capas.

```
Cliente

↓

Routes

↓

Controllers

↓

Services

↓

MongoDB
```

Cada capa tiene una responsabilidad específica:

- **Routes:** Define los endpoints de la API.
- **Controllers:** Gestionan las solicitudes HTTP.
- **Services:** Implementan la lógica del negocio.
- **Models:** Representan las colecciones de MongoDB mediante Mongoose.

---

# 🔐 Seguridad

La autenticación se realiza mediante **JSON Web Token (JWT)**.

Proceso de autenticación:

1. El usuario se registra o inicia sesión.
2. El servidor valida las credenciales.
3. Se genera un Token JWT.
4. El cliente almacena el Token.
5. Las rutas protegidas requieren el encabezado:

```
Authorization: Bearer <token>
```

Las contraseñas se almacenan cifradas utilizando **bcrypt**.

---

# 🗄 Base de datos

Motor utilizado:

- MongoDB

ODM utilizado:

- Mongoose

---

# 📦 Instalación

Clonar el repositorio

```bash
git clone https://github.com/usuario/backend-physiotrack.git
```

Ingresar al proyecto

```bash
cd backend-physiotrack
```

Instalar dependencias

```bash
pnpm install
```

o

```bash
npm install
```

---

# ⚙ Variables de entorno

Crear un archivo `.env`

Ejemplo:

```env
PORT=3000

MONGODB_URI=mongodb://localhost:27017/physiotrack

JWT_SECRET=TU_CLAVE_SECRETA
```

---

# ▶ Ejecutar el proyecto

Modo desarrollo

```bash
pnpm dev
```

Modo producción

```bash
pnpm start
```

---

# 📡 API REST

## Autenticación

| Método | Endpoint | Descripción |
|---------|----------|-------------|
| POST | /api/auth/register | Registrar un nuevo usuario |
| POST | /api/auth/login | Iniciar sesión |
| GET | /api/auth/perfil | Obtener el perfil del usuario autenticado |

---

# 📚 Patrones utilizados

- Arquitectura Cliente - Servidor
- Arquitectura en Capas
- REST API
- Middleware Pattern
- JWT Authentication

---

# 🌐 Integración

```
Frontend (React)
        │
      Axios
        │
REST API (Express)
        │
     Mongoose
        │
     MongoDB
```

---

# 👨‍💻 Equipo de desarrollo

Proyecto desarrollado como parte del curso de Arquitectura de Software.

Integrantes:

- Integrante 1
- Integrante 2
- Integrante 3

---

# 📄 Licencia

Proyecto desarrollado únicamente con fines académicos.
