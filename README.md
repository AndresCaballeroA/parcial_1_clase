```markdown
# Proyecto Parcial - React Multilenguaje

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

El proyecto se organiza en diferentes carpetas y archivos para separar responsabilidades y facilitar el mantenimiento:

- **/src**
  - **components**: Contiene componentes reutilizables, como `MenuCarousel` y `MenuCard`.
  - **pages**: Agrupa las vistas principales de la aplicación:
    - **Login**: Página de autenticación.
    - **Home**: Página de inicio con navegación a las diferentes secciones.
    - **Menu**: Página que muestra el menú de productos o servicios.
    - **Stores**: Página que muestra las tiendas o sucursales.
    - **Cart**: Página del carrito de compras.
  - **i18n.js**: Archivo de configuración para **react-i18next** que define los recursos de traducción en inglés y español.
  - **App.js**: Configura el enrutado de la aplicación utilizando **React Router**.
  - **index.js**: Punto de entrada de la aplicación que importa la configuración de i18next y renderiza el componente raíz.
  - **App.css**: Archivo de estilos globales para la aplicación, que define la apariencia y animaciones básicas.

## Componentes y Herramientas Utilizadas

### React

- **React** es la biblioteca principal para construir la interfaz de usuario. Se utilizan hooks como:
  - `useState` para manejar el estado local en componentes (por ejemplo, en formularios de Login o en la carga de datos en MenuPage).
  - `useEffect` para ejecutar efectos secundarios, como la realización de peticiones HTTP con Axios al montar componentes.

### React Router

- **React Router** se utiliza para definir la navegación entre diferentes páginas. En el archivo `App.js` se configuran las rutas de la siguiente manera:

  ```javascript
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Login from "./pages/Login";
  import Home from "./pages/Home";
  import Menu from "./pages/Menu";
  import Stores from "./pages/Stores";
  import Cart from "./pages/Cart";

  function App() {
      return (
          <Router>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/stores" element={<Stores />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>
          </Router>
      );
  }

  export default App;
  ```

- Esto permite una navegación fluida entre las páginas de Login, Home, Menu, Stores y Cart.

### React Bootstrap

- **React Bootstrap** es fundamental para el diseño y la responsividad de la aplicación. Entre los componentes utilizados se encuentran:
  - **Container**: Define áreas de contenido centralizadas y responsivas.
  - **Row y Col**: Se utilizan para estructurar el layout en forma de rejilla, permitiendo un diseño adaptable a diferentes tamaños de pantalla.
  - **Card**: Permite mostrar información de manera organizada y estilizada, usado en componentes como `MenuCard`.
  - **Carousel**: Implementa carruseles de imágenes para mostrar promociones o imágenes destacadas en componentes como `MenuCarousel`.
  - **Button**: Se utiliza para la interacción en formularios y botones de navegación.
  - **Form**: Facilita la creación y validación de formularios, usado en la página de Login.
  
  Ejemplo de uso en `MenuCarousel`:
  
  ```javascript
  import React from "react";
  import { Carousel } from "react-bootstrap";
  import { useTranslation } from "react-i18next";

  export const MenuCarousel = () => {
    const { t } = useTranslation();
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="image1.jpg" alt={t("firstSlide")} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="image2.jpg" alt={t("secondSlide")} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="image3.jpg" alt={t("thirdSlide")} />
        </Carousel.Item>
      </Carousel>
    );
  };
  ```

- El uso de estos componentes permite un desarrollo más rápido y un estilo consistente en toda la aplicación.

### React Icons

- **React Icons** se utiliza para incluir iconos vectoriales escalables en la interfaz. Por ejemplo, en la página **Home** se usan iconos para representar menús, tiendas y el carrito de compras:
  
  ```javascript
  import { FaUtensils, FaStore, FaShoppingCart } from "react-icons/fa";
  ```

### Axios

- **Axios** se emplea para realizar peticiones HTTP a la API (por ejemplo, usando un endpoint de Mockaroo). Se utiliza en componentes como `MenuPage` para obtener datos de manera asíncrona:
  
  ```javascript
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);
  ```

### react-i18next

- **react-i18next** permite la internacionalización de la aplicación. Se configuró en el archivo `i18n.js` y se usa el hook `useTranslation` en los componentes para renderizar textos de manera dinámica según el idioma seleccionado.

### Archivos de Estilos (CSS)

- **App.css** contiene estilos globales para la aplicación, incluyendo animaciones y diseños responsivos. Por ejemplo, se definen estilos para el logo, la cabecera y enlaces:
  
  ```css
  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  ```

## Decisiones y Proceso de Desarrollo

El proceso de desarrollo fue meticuloso y modular, enfocado en la experiencia del usuario, la mantenibilidad y la escalabilidad del proyecto.

1. **Elección del Stack Tecnológico:**
   - **React:** Se seleccionó por su capacidad para construir interfaces interactivas y su amplio ecosistema.
   - **React Bootstrap y React Icons:** Se optó por estas herramientas para crear una interfaz moderna, responsiva y visualmente atractiva mediante componentes predefinidos.
   - **Axios:** Elegido para la integración con APIs, facilitando la obtención y manejo de datos.
   - **React Router:** Se utilizó para definir una navegación clara y estructurada entre páginas.
   - **react-i18next:** Permite soportar múltiples idiomas, haciendo que la aplicación sea accesible para una audiencia más amplia sin duplicar código.

2. **Gestión de Estados y Datos:**
   - Se empleó el hook `useState` en componentes como `Login` y `MenuPage` para gestionar estados locales, tales como la entrada de datos en formularios y la carga de información desde la API.
   - El hook `useEffect` se utilizó en `MenuPage` para ejecutar peticiones HTTP mediante Axios, garantizando que la interfaz se actualice conforme se obtengan los datos.

3. **Ruteo y Navegación:**
   - **React Router** se configuró en `App.js` para definir rutas que enlazan las páginas de la aplicación:
     - **Login (`/`)**: Página de autenticación.
     - **Home (`/home`)**: Página de inicio que ofrece opciones de navegación a diferentes secciones.
     - **Menu (`/menu`)**: Página que presenta un carrusel y tarjetas de menú, utilizando `MenuCarousel` y `MenuCard`.
     - **Stores (`/stores`)**: Página similar a Menu, pero enfocada en mostrar información de tiendas.
     - **Cart (`/cart`)**: Página para la gestión del carrito de compras.
   - Esta organización facilita la experiencia del usuario y permite una navegación intuitiva.

4. **Internacionalización:**
   - Se integró **react-i18next** para permitir el cambio dinámico de idioma.
   - El archivo `i18n.js` contiene las traducciones para inglés y español. Los componentes usan el hook `useTranslation` para acceder a la función `t`, que traduce los textos de forma dinámica.
   - Ejemplo en `MenuCarousel`:
     ```javascript
     <img className="d-block w-100" src="image1.jpg" alt={t("firstSlide")} />
     ```
   - Este sistema facilita la extensión del proyecto a otros idiomas sin modificar cada componente individualmente.

5. **Pruebas y Validaciones:**
   - Se llevaron a cabo pruebas manuales en cada componente para asegurar que las peticiones a la API se realicen correctamente y que la navegación sea fluida.
   - La validación de formularios (por ejemplo, en `Login`) se implementó para verificar la estructura de correo electrónico y la longitud adecuada del password, garantizando que se cumplan los requisitos mínimos.

6. **Decisiones de Diseño y UX:**
   - **Diseño Minimalista y Funcional:** Se optó por un diseño limpio utilizando los componentes de React Bootstrap, asegurando consistencia visual y responsividad.
   - **Modularidad:** La separación en componentes y páginas facilita el mantenimiento y la escalabilidad, permitiendo incorporar nuevos elementos o idiomas de forma sencilla.
   - **Estilos Responsivos:** El archivo `App.css` y el uso de React Bootstrap garantizan que la interfaz se adapte a distintos dispositivos y tamaños de pantalla.
   - **Accesibilidad:** Se cuidó el uso de textos descriptivos y de iconos, lo que mejora la experiencia para todos los usuarios.

## Internacionalización

- **Configuración:**  
  Se creó el archivo `i18n.js` para definir los recursos de traducción en inglés y español. Un ejemplo de la configuración es:

  ```javascript
  import i18n from "i18next";
  import { initReactI18next } from "react-i18next";

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

  i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
  ```

- **Uso en Componentes:**  
  Los componentes que muestran textos estáticos (por ejemplo, `Home`, `Login`, `MenuCarousel`) utilizan el hook `useTranslation` para renderizar los textos de manera dinámica según el idioma seleccionado.

## Consideraciones Finales

- **Mantenimiento:**  
  La modularidad del código y el uso de librerías estándar como React, React Router, y React Bootstrap facilitan futuras modificaciones y la incorporación de nuevos componentes o idiomas.

- **Escalabilidad:**  
  La integración de react-i18next y la estructura basada en componentes independientes permiten ampliar la aplicación a nuevos mercados sin necesidad de reestructurar el código base.

- **Facilidad de Uso:**  
  La combinación de React Router para la navegación, React Bootstrap para el diseño responsivo, y Axios para la comunicación con APIs, asegura una experiencia de usuario intuitiva y un desarrollo ágil.

---
