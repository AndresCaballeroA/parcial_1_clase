```markdown
# Proyecto Parcial - React Multilenguaje

Este proyecto es una aplicación desarrollada en React que implementa un sistema de internacionalización (i18next) para soportar múltiples idiomas (inglés y español). La aplicación incluye componentes de navegación, autenticación, visualización de menús, carruseles y tarjetas, utilizando librerías como React Bootstrap, React Router, Axios y React Icons.

## Índice

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes y Herramientas Utilizadas](#componentes-y-herramientas-utilizadas)
- [Decisiones y Proceso de Desarrollo](#decisiones-y-proceso-de-desarrollo)
- [Internacionalización](#internacionalización)
- [Consideraciones Finales](#consideraciones-finales)

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar las dependencias:**

   Usando npm:
   ```bash
   npm install
   ```

   O usando Yarn:
   ```bash
   yarn install
   ```

## Ejecución del Proyecto

Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
npm start
```

o

```bash
yarn start
```

La aplicación se abrirá en el navegador en `http://localhost:3000`.

## Estructura del Proyecto

El proyecto se ha estructurado de la siguiente manera:

- **/src**
  - **components**: Contiene los componentes reutilizables, como `MenuCarousel`, `MenuCard`, `Home`, `Login`, y `MenuPage`.
  - **i18n.js**: Archivo de configuración para **react-i18next** que define las traducciones en inglés y español.
  - **App.js**: Componente principal que integra las rutas y la configuración general de la aplicación.
  - **index.js**: Punto de entrada de la aplicación, donde se importa la configuración de i18next y se renderiza el componente raíz.

## Componentes y Herramientas Utilizadas

- **React**: Biblioteca para la creación de interfaces de usuario.
- **React Router**: Para la gestión de rutas y navegación en la aplicación.
- **React Bootstrap**: Conjunto de componentes de Bootstrap adaptados para React, facilitando el diseño responsivo.
- **Axios**: Para realizar peticiones HTTP a la API (utilizando Mockaroo en este ejemplo).
- **React Icons**: Para incluir iconos en los botones de navegación y otros componentes.
- **react-i18next**: Para la implementación de la internacionalización y soporte multilenguaje.
- **CSS/SCSS**: Para el estilizado de los componentes, utilizando clases propias en cada componente.

## Decisiones y Proceso de Desarrollo

1. **Elección del Stack Tecnológico:**
   - Se eligió React por su capacidad para construir interfaces de usuario interactivas y su gran ecosistema de librerías.
   - Se integraron **React Bootstrap** y **React Icons** para acelerar el desarrollo de la UI con componentes predefinidos y estilos responsivos.

2. **Gestión de Estados y Datos:**
   - Se utilizó el hook `useState` para gestionar estados locales dentro de los componentes.
   - Se usó `useEffect` para realizar peticiones a la API utilizando Axios, asegurando la actualización de los datos en el componente `MenuPage`.

3. **Ruteo y Navegación:**
   - **React Router** se implementó para manejar la navegación entre las diferentes vistas (por ejemplo, Home, Menu, Stores, Cart y Login).

4. **Internacionalización:**
   - Se integró **react-i18next** para soportar múltiples idiomas. Se creó el archivo `i18n.js` para definir las traducciones y se utilizaron hooks (`useTranslation`) en los componentes para mostrar textos dinámicamente según el idioma seleccionado.
   - Se definieron claves de traducción para todos los textos fijos y se estructuró el proyecto para facilitar la adición de nuevos idiomas.

5. **Pruebas y Validaciones:**
   - Se realizaron pruebas manuales para asegurar que las peticiones a la API se ejecutaran correctamente y que la navegación entre componentes fuera fluida.
   - Se validaron los formularios (por ejemplo, en el componente Login) para asegurar que las credenciales cumplieran con los requisitos mínimos.

6. **Decisiones de Diseño y UX:**
   - Se optó por un diseño minimalista y funcional, utilizando los componentes predefinidos de React Bootstrap para lograr una interfaz limpia y responsiva.
   - La estructura de carpetas y la modularización de componentes se planificaron para facilitar el mantenimiento y escalabilidad del proyecto.

## Internacionalización

- Se creó el archivo `i18n.js` para gestionar los recursos de traducción en inglés y español.
- Se utilizó el hook `useTranslation` en cada componente para obtener la función `t` y traducir los textos en tiempo real.
- Para cambiar el idioma, se puede modificar el valor por defecto en `i18n.js` o implementar un selector de idioma en la interfaz.

Ejemplo de traducciones definidas en `i18n.js`:

```javascript
const resources = {
  en: {
    translation: {
      menu: "Menu",
      stores: "Stores",
      cart: "Cart",
      login: "Log in",
      username: "Username",
      password: "Password",
      forgotPassword: "Forgot Password?",
      invalidCredentials: "Invalid email or password",
      slogan: "TOO GOOD TO GO FOOD WASTING SOLUTION",
      firstSlide: "First slide",
      secondSlide: "Second slide",
      thirdSlide: "Third slide"
    }
  },
  es: {
    translation: {
      menu: "MENÚ",
      stores: "TIENDAS",
      cart: "CARRITO",
      login: "Iniciar sesión",
      username: "Usuario",
      password: "Contraseña",
      forgotPassword: "¿Olvidaste tu contraseña?",
      invalidCredentials: "Correo o contraseña inválidos",
      slogan: "SOLUCIÓN PARA EVITAR EL DESPERDICIO DE COMIDA TOO GOOD TO GO",
      firstSlide: "Primer slide",
      secondSlide: "Segundo slide",
      thirdSlide: "Tercer slide"
    }
  }
};
```

## Consideraciones Finales

- **Mantenimiento:** La modularidad del código y el uso de librerías estándar facilitan futuras modificaciones y la incorporación de nuevos componentes o idiomas.
- **Escalabilidad:** La integración de react-i18next permite ampliar la aplicación a nuevos mercados sin necesidad de reestructurar el código base.
- **Facilidad de Uso:** La implementación de React Router y React Bootstrap asegura una experiencia de usuario intuitiva y un desarrollo ágil.

---
