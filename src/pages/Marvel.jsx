import { useEffect, useState } from "react";
import { CardComponent } from "../components/CardComponent";

export const Marvel = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga

  // Función para obtener productos de la API
  const fetchMarvelProducts = async () => {
    try {
      const response = await fetch("http://localhost:5223/api/products/company/Marvel");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data); // Almacenar los productos en el estado
    } catch (error) {
      console.error("Error fetching Marvel products:", error);
    } finally {
      setLoading(false); // Finalizar la carga
    }
  };

  useEffect(() => {
    fetchMarvelProducts(); // Llamar a la API al montar el componente
  }, []);

  return (
    <div className="m-4">
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p> // Indicador de carga
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {/* Iterar sobre los productos y renderizar CardComponent */}
          {products.map((product) => (
            <CardComponent key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
