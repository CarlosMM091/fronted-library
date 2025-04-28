📚 Librería Líbrópolis - Frontend
Frontend desarrollado para la plataforma Líbrópolis, proyecto académico de la materia Arquitectura de Software.

📄 Descripción
Esta aplicación es una librería online que permite a los usuarios:

Buscar libros por nombre o ISBN.

Filtrar libros por género, autor, precio (rango) y año de publicación.

Visualizar libros destacados y agregarlos a un carrito de compras.

Confirmar la compra de los libros seleccionados, mostrando un mensaje de agradecimiento al finalizar.

Este frontend ha sido desarrollado siguiendo las restricciones tecnológicas exigidas:

ReactJS para el desarrollo de componentes.

React Router para la navegación entre páginas.

Implementación de filtros dinámicos y búsqueda en tiempo real.

Flujo de compra completo (selección → revisión → confirmación).

🚀 Tecnologías utilizadas
ReactJS

React Router DOM

JavaScript

HTML5

CSS3

Vite (para la creación rápida del proyecto)

📷 Vistas principales
Página principal con libros destacados.

Búsqueda y filtrado de libros.

Página de contacto.

Página de carrito de compras con funcionalidad de eliminación de libros y confirmación de compra.

📂 Estructura del proyecto
/public
  └── vite.svg
/src
  ├── assets/
  ├── components/
      ├── BookCard.jsx
      ├── Navbar.jsx
  ├── context/
      └── CartContext.jsx
  ├── data/
      └── books.json
  ├── pages/
      ├── Home.jsx
      ├── Categories.jsx
      ├── Offers.jsx
      ├── Contact.jsx
      ├── Cart.jsx
  ├── AppRoutes.jsx
  ├── App.jsx
  ├── index.css
  └── main.jsx
.gitignore
README.md
index.html
package.json
vite.config.js
📈 Funcionalidades implementadas
🔎 Buscador de libros general (nombre o ISBN).

🏷️ Filtros por género, autor, precio mínimo/máximo y año.

🛒 Carrito de compras con conteo dinámico y opción de eliminar productos.

✅ Confirmación de compra con formulario y mensaje de agradecimiento.

🌐 Navegación fluida entre páginas usando React Router.

📦 Instalación y ejecución local
Clonar el repositorio:

git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git

Instalar dependencias:
npm install

Ejecutar el proyecto:
npm run dev

🧑‍💻 Autor
Nombre: Carlos Andres Montoya Murcia

Materia: Arquitectura de Software

Universidad: Universidad Catolica de Colombia

Entrega: Segunda Entrega
