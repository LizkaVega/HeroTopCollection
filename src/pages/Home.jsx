import { CardComponent } from '../components/CardComponent';
// import { SliderComponent } from '../components/SliderComponent';

export const Home = () => {
  // Crear una matriz de 4x4 (16 elementos)
  const matrix = Array(4).fill(Array(4).fill(null));

  return (
    <>
    {/* <SliderComponent /> */}
    <div className="grid grid-cols-4 gap-4 m-4">
      {matrix.map((row, rowIndex) => (
        row.map((_, colIndex) => (
          //  <CardComponent key={${rowIndex}-${colIndex}} /> debe llevar comillas invertidas
            <CardComponent key={`${rowIndex}-${colIndex}`} />
        ))
      ))}
    </div>
    </>
  );
};