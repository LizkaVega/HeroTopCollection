
const Cart = () => {
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
                {/* Ejemplo de Producto */}
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="shrink-0 md:order-1">
                      <img
                        className="h-20 w-20 dark:hidden"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                        alt="imac image"
                      />
                      <img
                        className="hidden h-20 w-20 dark:block"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                        alt="imac image"
                      />
                    </a>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="inline-flex h-5 w-5 items-center justify-center rounded-md border bg-gray-100 hover:bg-gray-200 focus:outline-none dark:bg-gray-700"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="w-10 text-center bg-transparent border-0 text-sm dark:text-white"
                          defaultValue="2"
                          required
                        />
                        <button
                          type="button"
                          className="inline-flex h-5 w-5 items-center justify-center rounded-md border bg-gray-100 hover:bg-gray-200 focus:outline-none dark:bg-gray-700"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          $1,499
                        </p>
                      </div>
                    </div>
  
                    <div className="w-full space-y-4 md:order-2 md:max-w-md">
                      <a href="#" className="text-base font-medium text-gray-900 dark:text-white">
                        PC system All in One APPLE iMac (2023)
                      </a>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="text-sm font-medium text-gray-500 dark:text-gray-400"
                        >
                          Add to Favorites
                        </button>
                        <button
                          type="button"
                          className="text-sm font-medium text-red-600 dark:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  

          {/* Resumen del Pedido */}
          <div className="mx-auto mt-6 max-w-4xl space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
              <div className="space-y-4">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base text-gray-500 dark:text-gray-400">Total</dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
                </dl>
              </div>
              <a href="/Checkout" className="w-full bg-primary-700 text-green rounded-lg text-sm font-medium text-center py-2.5">
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
