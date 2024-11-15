"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
// import Link from "next/link";

export function Login() {
  return (
    <form className="container flex max-w-md flex-col gap-4 bg-white p-5">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
          <Link to="/register" className="text-cyan-600 hover:underline dark:text-cyan-500">
            Registrarse
          </Link>
      </div>
      <Button type="submit">Log in account</Button>
    </form>
  );
}
