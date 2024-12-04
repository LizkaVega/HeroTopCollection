

import { Carousel } from "flowbite-react";

export function SliderComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-4">
      <Carousel>
        <img src="src/assets/Carrousel/Imagen de WhatsApp 2024-11-30 a las 16.22.54_34a326cf.jpg" alt="..." />
        <img src="src\assets\Carrousel\Imagen de WhatsApp 2024-11-30 a las 16.23.43_06f8f9cd.jpg" alt="..." />
        <img src="src\assets\Carrousel\Imagen de WhatsApp 2024-11-30 a las 16.27.50_3915120c.jpg" alt="..." />
      </Carousel>
    </div>
  );
}