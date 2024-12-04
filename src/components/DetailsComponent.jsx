import { useEffect, useState } from "react";

const DetailsComponent = () => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const productId = localStorage.getItem("productId"); // Obtener el ID desde localStorage

    if (productId) {
      // Hacer el GET a la API usando el productId
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`http://localhost:5223/api/products/${productId}`);
          const data = await response.json();
          setProductDetails(data); // Guardar los detalles del producto en el estado
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProductDetails(); // Llamar a la función cuando el componente se monta
    } else {
      console.error("No product ID found");
    }
  }, []);

  if (!productDetails) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los detalles
  }

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full dark:hidden"
              src={productDetails.imageUrl} // Usar la imagen del producto
              alt="Product Image Light"
            />
            <img
              className="w-full hidden dark:block"
              src={productDetails.imageUrlDark} // Usar la imagen oscura del producto
              alt="Product Image Dark"
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {productDetails.name} {/* Usar el nombre del producto */}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${productDetails.price} {/* Usar el precio del producto */}
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  (5.0)
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  345 Reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 12"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M16 5L12 9M12 9L8 5M12 9L12 1"
                  />
                </svg>
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsComponent;
