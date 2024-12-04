import React, { useState } from "react";

const Checkout = () => {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const subtotal = parseFloat(localStorage.getItem("subtotal")) || 0;

  // Calcular el impuesto (ejemplo: 7% de impuestos)
  const tax = subtotal * 0.07;

  // Definir un costo de envío (puedes ajustarlo según tus necesidades)
  const shipping = 10; // O alguna lógica para calcularlo

  // Calcular el total
  const total = subtotal + tax + shipping;

  const [errorMessage, setErrorMessage] = useState("");

  // Función que maneja el proceso de pago
  const handlePayment = async (event) => {
    event.preventDefault();

    // Obtener el token del localStorage
    const token = localStorage.getItem("Authorization");

    if (!token) {
      setErrorMessage("No estás autenticado. Inicia sesión para continuar.");
      return;
    }

    // Aquí puedes agregar la lógica para hacer la solicitud de pago,
    // pasando el token y la información del pedido al backend.
    try {
      const response = await fetch("http://localhost:5223/api/user/order", {
        method: "POST",
        headers: {
          "Authorization": `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      });

      if (response.ok) {
        // Si el pago es exitoso, redirigir o mostrar éxito
        alert("Pago exitoso");
        localStorage.removeItem("products");
        localStorage.removeItem("subtotal");
        window.location.href = "/home";
      } else {
        // Si hay un error, manejar el error de manera adecuada
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Hubo un error con el pago.");
      }
    } catch (error) {
      setErrorMessage("Error al procesar el pago. Intenta nuevamente.");
    }
  };

  return (
    <section className="container mx-5 bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Payment
          </h2>

          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4">
              {errorMessage}
            </div>
          )}

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form
              onSubmit={handlePayment}
              className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
            >
              {/* Información de la tarjeta de crédito */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="full_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full name (as displayed on card)*
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Bonnie Green"
                    required
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-number-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card number*
                  </label>
                  <input
                    type="text"
                    id="card-number-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="card-expiration-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card expiration*
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                      <svg
                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="card-expiration-input"
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="12/23"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvv-input"
                    className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CVV*
                    <button
                      data-tooltip-target="cvv-desc"
                      data-tooltip-trigger="hover"
                      className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 2a6 6 0 0 0-8 0 6 6 0 0 0 0 8 6 6 0 0 0 8 0 6 6 0 0 0 0-8Zm-6 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
                        />
                      </svg>
                    </button>
                  </label>
                  <div
                    id="cvv-desc"
                    role="tooltip"
                    className="hidden w-44 rounded-lg border border-gray-200 bg-gray-700 p-2 text-xs text-white shadow-sm"
                  >
                    The CVV is the 3-digit number on the back of your card.
                  </div>
                  <input
                    id="cvv-input"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="***"
                    required
                  />
                </div>
              </div>

              {/* Resumen de la compra */}
              <div className="mb-4 border-t border-gray-200 pt-6 dark:border-gray-600">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                  Order Summary
                </h3>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Botón de pago */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
                >
                  Pay ${total.toFixed(2)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
