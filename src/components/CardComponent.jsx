"use client";

import { Card } from "flowbite-react";

export function CardComponent() {

 

  return (
    <Card
      className="max-w-md"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="https://dummyimage.com/300x400/374151/fff"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Nombre del producto coleccionable
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
      <a
          href="/detail_product"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      {/* <Button color="light"> <HiUserCircle className="mr-3 h-4 w-4" onClick={ handleClick }/>View details</Button> */}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$99</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}