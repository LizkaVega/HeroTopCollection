"use client";

import { Navbar, TextInput } from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";
import { useUser } from "../services/UserContext";

export function NavbarComponent() {
  const { user, logoutUser } = useUser();

  return (
    <Navbar fluid rounded className="m-4">
      <Navbar.Brand href="logo.png">
        <img src="logo.png" className="mr-3 h-14 sm:h-16" alt="HeroTopCollection" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HeroTopCollection
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center space-x-4">
        {user ? (
          // Si el usuario está logueado, muestra su nombre y un botón para cerrar sesión
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Welcome, {user.name}
            </span>
            <button
              onClick={logoutUser}
              className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700"
            >
              Log out
            </button>
          </div>
        ) : (
          // Si no está logueado, muestra el enlace para iniciar sesión
          <Navbar.Link href="/login">Log in</Navbar.Link>
        )}
        <a
          href="/cart"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Shopping Cart
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="flex items-center space-x-4">
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/dc_comics">DC Comics</Navbar.Link>
        <Navbar.Link href="/marvel">Marvel</Navbar.Link>
        <TextInput
          type="search"
          placeholder="Search..."
          className="w-48 md:w-64"
          icon={HiOutlineSearch}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}
