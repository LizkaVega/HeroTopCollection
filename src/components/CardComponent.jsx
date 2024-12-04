"use client";

import { Card } from "flowbite-react";
import PropTypes from "prop-types";

export function CardComponent({ product }) {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.productId === product.productId
    );

    if (existingProductIndex !== -1) {
      alert("Este producto ya está en el carrito.");
      return;
    }

    cart.push({
      Name: product.name,
      Description: product.description,
      ProductId: product.productId,
      Price: product.price,
      Features: product.features,
      ImageUrl: product.imageUrl,
      OrderDate: new Date().toISOString(),
      CompanyName: product.companyName,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    const subtotal = cart.reduce((total, item) => total + item.Price, 0);
    localStorage.setItem("subtotal", subtotal.toFixed(2));

    alert("Producto añadido al carrito");
  };

  const handleViewDetails = () => {
    // Guardar el ID del producto en localStorage
    localStorage.setItem("productId", product.productId);
  };

  return (
    <Card className="max-w-md" imgAlt={product.name} imgSrc={product.imageUrl}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <a
          href="/detail_product"
          onClick={handleViewDetails} // Llamar a la función para guardar el ID
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Details
        </a>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        <a
          href="#"
          onClick={handleAddToCart}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}

CardComponent.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};
