import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import GameDetail from "../components/GameDetail.tsx";

interface Videojuego {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

export default function GamesDetails() {
  // useParams() es el gancho que atrapa el ID que viaja en la URL
  const { id } = useParams();

  const [detalleJuego, setDetalleJuego] = useState<Videojuego | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/videojuegos/${id}`)
      .then((res) => res.json())
      .then((data: Videojuego) => {
        setDetalleJuego(data);
      })
      .catch((err) => console.error("Error:", err));
  }, [id]);

  return (
    <div className="min-h-screen bg-[#1a0b3b] text-white pt-10">
      <div className="text-left mb-8 px-6">
        {/* Un botón para volver al catálogo siempre viene bien */}
        <Link
          to="/"
          className="bg-yellow-500 text-[#1a0b3b] px-6 py-2 rounded font-bold hover:bg-yellow-400 transition"
        >
          Volver al catálogo
        </Link>
      </div>

      <main className="max-w-4xl mx-auto pt-10 px-6 mb-12">
        {detalleJuego ? (
          <GameDetail
            id={detalleJuego.id}
            titulo={detalleJuego.titulo}
            precio={detalleJuego.precio}
            imagen={detalleJuego.imagen}
            descripcion={detalleJuego.descripcion}
          />
        ) : (
          <p className="text-yellow-500 text-2xl font-bold animate-pulse">
            Cargando juego...
          </p>
        )}
      </main>
    </div>
  );
}
