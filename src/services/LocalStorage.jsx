// localStorageService.js

export const getFromLocalStorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item); // Devuelve el valor parseado si existe
      }
      return null; // Retorna null si no existe el ítem
    } catch (error) {
      console.error("Error al obtener el item de localStorage:", error);
      return null; // En caso de error, retorna null
    }
  };
  
  export const setToLocalStorage = (key, value) => {
    try {
      const valueToStore = JSON.stringify(value); // Convierte el valor a JSON
      localStorage.setItem(key, valueToStore); // Guarda el valor en localStorage
    } catch (error) {
      console.error("Error al guardar el item en localStorage:", error);
    }
  };
  