import { Link } from "react-router-dom";
// 1. Definimos qué "props" (datos) acepta este componente
interface GameDetailProps {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

export default function GameDetail({ titulo, precio, imagen, descripcion, }: GameDetailProps) {
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      <div className="justify-center flex">
        <img
          src={`http://127.0.0.1:8000/${imagen}`}
          alt={titulo}
          className="shadow-lg w-full max-w-md rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold mt-4 ms-0 uppercase">{titulo}</h1>
        <p className="text-lg text-gray-300">{descripcion}</p>
        <div className="mt-auto flex flex-row">
            <p className="text-2xl font-bold text-yellow-500">{precio}€</p>
            <Link
            to="/"
            className="bg-yellow-500 ms-auto text-[#1a0b3b] px-6 py-2 rounded font-bold hover:bg-yellow-400 transition"
            >
            Comprar
            </Link>
        </div>
      </div>
      
    </div>
  );
}
