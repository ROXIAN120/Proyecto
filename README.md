![Imagen 1](C:\Users\itman\Desktop\mi-proyecto\imagenes\1.jpg)
![Imagen 2](C:\Users\itman\Desktop\mi-proyecto\imagenes\2.jpg)
![Imagen 3](C:\Users\itman\Desktop\mi-proyecto\imagenes\3.jpg)

# 🔧 TallerPro — Sistema de Gestión de Taller de Reparaciones

Sistema web desarrollado con Laravel 12 (PHP 8.2) para la administración integral de un taller de reparaciones: control de usuarios y roles, gestión de clientes, inventario de repuestos y generación de reportes de reparación y diagnóstico.

## 📋 Módulos del sistema

| Módulo | Pantallas |
|---|---|
| 🔐 Seguridad | Login, Recuperación de contraseña |
| ⚙️ Administración | Usuarios, Roles, Dashboard |
| 💼 Gestión Comercial | Clientes, Repuestos (almacén / stock) |
| 📊 Reportes | Reporte de Reparaciones, Reporte de Diagnósticos |

## 🛠️ Tecnologías

- Backend: Laravel 12 · PHP 8.2
- Base de datos: MySQL / SQLite
- Frontend: Blade · CSS
- Herramientas: Composer · Git · Visual Studio Code

## ✏️ Wireframes (baja fidelidad)

Los wireframes definen la estructura y distribución de cada pantalla, sin color ni estilo visual final.

**1. Seguridad — Login** [Wireframe Login]

**2. Seguridad — Recuperación de contraseña** [Wireframe Recuperación de contraseña]

**3. Administración — Dashboard** [Wireframe Dashboard]

**4. Administración — Usuarios y Roles** [Wireframe Usuarios y Roles]

## 🎨 Mockups (alta fidelidad)

Los mockups muestran el diseño visual final del sistema: paleta de colores, tipografía, componentes e identidad de marca TallerPro.

Paleta: Azul marino #1B2A41 (primario) · Ámbar #F2A104 (acento) · Fondo #F4F6F9

**1. Gestión Comercial — Clientes** [Mockup Clientes]

**2. Gestión Comercial — Repuestos (Almacén / Stock)** [Mockup Repuestos y Stock]

**3. Reportes — Reporte de Reparaciones** ![Reporte de Reparaciones (Órdenes de Trabajo Activas)](C:\Users\itman\Desktop\mi-proyecto\imagenes\4.jpeg)

**4. Reportes — Reporte de Diagnósticos** ![Reporte de Diagnósticos (Nueva Orden)](C:\Users\itman\Desktop\mi-proyecto\imagenes\5.jpg)

## 🚀 Instalación del proyecto

```bash
# Clonar el repositorio
git clone [https://github.com/RonSalvet/Proyecto-Laravel.git](https://github.com/RonSalvet/Proyecto-Laravel.git)
cd Proyecto-Laravel

# Instalar dependencias
composer install

# Configurar entorno
copy .env.example .env
php artisan key:generate

# Base de datos
php artisan migrate

# Ejecutar servidor de desarrollo
php artisan serve