"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export function Register() {
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
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
      <div className="flex items-center gap-2">
          <Link to="/login" className="text-cyan-600 hover:underline dark:text-cyan-500">
            Log in
          </Link>
      </div>
    </form>
  );
}
