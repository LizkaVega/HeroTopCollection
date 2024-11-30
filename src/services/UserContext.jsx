import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verifica si hay un token guardado
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetch('/api/verifyToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            setUser(data.user); // Carga la información del usuario
          }
        })
        .catch(() => {
          localStorage.removeItem("authToken"); // Limpia el token si es inválido
        });
    }
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("authToken"); // Borra el token al cerrar sesión
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
