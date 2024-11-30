import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../services/UserContext"; // Importa el contexto

export function Login() {
  const [error, setError] = useState(null);
  const { loginUser } = useUser(); // Hook para usar el contexto
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
  
        // Guarda el token en localStorage
        localStorage.setItem("authToken", data.token);
  
        // Guarda el usuario en el contexto
        loginUser(data.user);
  
        // Redirige al usuario
        navigate("/home");
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
