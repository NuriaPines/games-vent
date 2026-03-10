// 1. Definimos qué "props" (datos) acepta este componente
interface GameCardProps {
  titulo: string;
  precio: number;
  imagen: string;
}

// 2. Le decimos a la función que use esa interfaz
export default function GameCard({ titulo, precio, imagen }: GameCardProps) {
  return (
    <div className="bg-[#0f0524] rounded-lg overflow-hidden flex flex-col shadow-2xl transition-transform hover:scale-105">
      <img 
        src={`http://localhost:8000/${imagen}`} 
        className="w-full aspect-[3/4] object-cover" 
        alt={titulo}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold uppercase text-center mb-6 h-10 flex items-center justify-center">
          {titulo}
        </h3>
        <div className="mt-auto flex justify-between items-center px-2">
          <span className="text-lg font-bold">{precio}€</span>
          <button className="bg-[#00cba9] hover:bg-[#00b395] text-[#0f0524] font-black py-2 px-4 rounded-full text-[10px] uppercase">
            🛒 Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
}