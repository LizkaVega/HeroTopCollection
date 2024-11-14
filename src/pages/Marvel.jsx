import { CardComponent } from '../components/CardComponent';

export const Marvel = () => {

  const matrix = Array(4).fill(Array(4).fill(null));
  return (
    <>
    <div className="grid grid-cols-4 gap-4 m-4">
      {matrix.map((row, rowIndex) => (
        row.map((_, colIndex) => (
          <CardComponent key={`${rowIndex}-${colIndex}`} />
        ))
      ))}
    </div>
    </>
  )
}
