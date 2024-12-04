import React from "react";

const Cart = () => {
  const [cart, setCart] = React.useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Función para eliminar un producto del carrito
  const handleRemoveProduct = (productId) => {
    // Filtrar el carrito para excluir el producto con el ID especificado
    const updatedCart = cart.filter((product) => product.ProductId !== productId);

    // Actualizar el carrito en el estado y en el localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Mostrar una alerta (opcional)
    alert("Producto eliminado del carrito");
  };

  return (
    <section className="container mx-5 bg-white py-8 antialiased dark:bg-gray-900 md:py-16 p-10">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* Productos */}
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {/* Iterar sobre el carrito y mostrar productos dinámicamente */}
              {cart.map((product) => (
                <div
                  key={product.ProductId}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                >
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="shrink-0 md:order-1">
                      <img
                        className="h-20 w-20 dark:hidden"
                        src={product.ImageUrl}
                        alt={product.Name}
                      />
                      <img
                        className="hidden h-20 w-20 dark:block"
                        src={product.ImageUrl}
                        alt={product.Name}
                      />
                    </a>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center"></div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          ${product.Price}
                        </p>
                      </div>
                    </div>

                    <div className="w-full space-y-4 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 dark:text-white"
                      >
                        {product.Name}
                      </a>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(product.ProductId)}
                          className="text-sm font-medium text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resumen del Pedido */}
          <div className="mx-auto mt-6 max-w-4xl space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>
              <div className="space-y-4">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base text-gray-500 dark:text-gray-400">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    $
                    {cart
                      .reduce((total, product) => total + product.Price, 0)
                      .toFixed(2)}
                  </dd>
                </dl>
              </div>
              <a
                href="/Checkout"
                className="w-full bg-primary-700 text-green rounded-lg text-sm font-medium text-center py-2.5"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
