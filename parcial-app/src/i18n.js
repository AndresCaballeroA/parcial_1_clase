// i18n.js
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
      slogan: "TOO GOOD TO GO FOOD WASTING SOLUTION"
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
      slogan: "SOLUCIÓN PARA EVITAR EL DESPERDICIO DE COMIDA TOO GOOD TO GO"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma por defecto
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
