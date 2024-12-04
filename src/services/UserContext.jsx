import React, { createContext, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // Verifica si hay un token guardado
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`, // Comillas invertidas (backticks) necesarias aquí
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            console.log("Ok"); // Carga la información del usuario
          }
        })
        .catch(() => {
          localStorage.removeItem("Authorization"); // Limpia el token si es inválido
        });
    }
  }, []);

  const loginUser = () => {
    localStorage.getItem("Authorization");
  };

  const logoutUser = () => {
    localStorage.removeItem("Authorization"); // Borra el token al cerrar sesión
  };

  return (
    <UserContext.Provider value={{ loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
