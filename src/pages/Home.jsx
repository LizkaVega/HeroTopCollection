import { useEffect, useState } from "react";
import { CardComponent } from "../components/CardComponent";

export const Home = () => {
  const [products, setProducts] = useState([]);

  // Llamada a la API para obtener los productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5223/api/products/all");
        const data = await response.json();
        setProducts(data);  // Guardamos los productos en el estado
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);  // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <>
      <div className="grid grid-cols-4 gap-4 m-4">
        {/* Mapear los productos obtenidos de la API */}
        {products.map((product) => (
          <CardComponent key={product.productId} product={product} />
        ))}
      </div>
    </>
  );
};
