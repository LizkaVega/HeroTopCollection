import { useState } from "react";
import { setToLocalStorage, getFromLocalStorage } from "../services/LocalStorage";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../services/UserContext"; // Importa el contexto

export function Login() {
  const [error, setError] = useState(null);
  const { loginUser } = useUser(); // Hook para usar el contexto
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const Email = event.target.email.value;
    const Password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:5223/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, Password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToLocalStorage("Authorization", data.token)
        loginUser(data.token); // Guarda el usuario en el contexto
        navigate("../"); // Redirige al usuario
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <form
      className="container flex max-w-md flex-col gap-4 bg-white p-5"
      onSubmit={handleLogin}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" name="email" type="email" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" name="password" type="password" required shadow />

      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit">Log in account</Button>
      <Link to="/register" className="text-cyan-600 hover:underline dark:text-cyan-500">
        Registrarse
      </Link>
    </form>
  );
}
