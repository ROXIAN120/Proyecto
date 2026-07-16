# 🔧 Taller Santa Cruz — Sistema de Gestión Automotriz

Sistema web desarrollado con **Laravel 11** (PHP 8.2) y **React (Inertia.js)** para el control y seguimiento de talleres mecánicos en Santa Cruz de la Sierra: gestión de clientes, vehículos, mecánicos asignados y control detallado de las órdenes de trabajo.

## 📋 Módulos del sistema

| Módulo | Pantallas |
|---|---|
| 🔐 **Seguridad** | Login, Registro, Recuperación de contraseña |
| ⚙️ **Administración** | Dashboard |
| 💼 **Gestión Comercial** | Órdenes de Trabajo Activas, Nueva Orden de Trabajo |
| 🚘 **Operaciones** | Clientes, Vehículos, Empleados (Próximamente) |

## 🛠️ Tecnologías

- **Backend:** Laravel 11 · PHP 8.2
- **Base de datos:** MySQL (Diseño Relacional de 21 Tablas)
- **Frontend:** React 18 · Inertia.js · Tailwind CSS · TypeScript
- **Herramientas:** Vite · Node.js · Composer · Visual Studio Code

## 🎨 Mockups (Alta fidelidad)

Los mockups muestran el diseño visual final del sistema: paleta de colores oscuros adaptativa (Dark Mode), tipografía limpia e identidad visual moderna centrada en la experiencia de usuario.

**Paleta de colores:** Zinc Dark `#09090b` (fondo principal) · Ámbar `#f59e0b` (acento órdenes) · Rosa `#f43f5e` (acento registros).

### 1. Gestión de Servicios — Nueva Orden de Trabajo
Registro de un nuevo servicio en base a una solicitud, asignando vehículos, clientes y mecánicos.
![Nueva Orden de Trabajo](docs/mockup_nueva_orden.png)

### 2. Gestión de Servicios — Órdenes de Trabajo Activas
Listado completo de servicios activos, mecánicos asignados y diagnósticos en curso con filtros interactivos.
![Órdenes de Trabajo Activas](docs/mockup_ordenes_activas.png)

## 🚀 Instalación del proyecto

```bash
# Clonar el repositorio (Ajustar URL al repositorio real)
git clone https://github.com/tu-usuario/mi-proyecto.git
cd mi-proyecto

# Instalar dependencias de PHP y Node
composer install
npm install

# Configurar entorno
copy .env.example .env
php artisan key:generate

# Base de datos
php artisan migrate

# Ejecutar servidores de desarrollo (Se recomiendan dos terminales)
php artisan serve
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

*Abrir en el navegador: http://localhost:8000*

---
👤 **Autor:** Rodrigo Ledezma Sanchez — Proyecto académico de Programación Web II.
