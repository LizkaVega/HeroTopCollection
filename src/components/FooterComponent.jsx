"use client";

import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container className="m-4">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="logo.png"
            alt="Logo"
            name="HeroTopCollection"
          />
          <Footer.LinkGroup>
            <Footer.Link href="/About">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="Contact">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="HeroTopCollection" year={2024} />
      </div>
    </Footer>
  );
}