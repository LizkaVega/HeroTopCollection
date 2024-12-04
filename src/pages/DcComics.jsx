import { useEffect, useState } from 'react';
import { CardComponent } from '../components/CardComponent';

export const DcComics = () => {
  const [products, setProducts] = useState([]);

  // Función para obtener los productos desde la API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5223/api/products/company/DC_Comics');
      if (!response.ok) {
        throw new Error('Error fetching products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  // Ejecutar la petición al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {products.map((product, index) => (
        <CardComponent
          key={product.productId}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};
