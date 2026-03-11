import { Link } from "react-router-dom";
// 1. Definimos qué "props" (datos) acepta este componente
interface GameCardProps {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
}

// 2. Le decimos a la función que use esa interfaz
export default function GameCard({ id, titulo, precio, imagen }: GameCardProps) {
  return (
    <div className="bg-[#0f0524] rounded-lg overflow-hidden flex flex-col shadow-2xl transition-transform hover:scale-105">
      <Link to={`/juego/${id}`}>
        <img 
          src={`http://127.0.0.1:8000/${imagen}`} 
          className="w-full aspect-[3/4] object-cover" 
          alt={titulo}
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold uppercase text-center mb-6 h-10 flex items-center justify-center">
          <Link to={`/juego/${id}`} className="transition-transform hover:scale-105 hover:underline hover:[text-shadow:_0_0_5px_#eab308] cursor-pointer">
            {titulo}
          </Link>
        </h3>
        <div className="mt-auto flex justify-between items-center px-2">
          <span className="text-lg font-bold">{precio}€</span>
          <Link to={`/juego/${id}`} className="bg-yellow-500 ms-auto text-[#1a0b3b] px-2 py-1 rounded font-bold hover:bg-yellow-400 transition">Comprar ahora</Link>
        </div>
      </div>
    </div>
  );
}