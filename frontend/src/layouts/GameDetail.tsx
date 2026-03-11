import {useParams, Link } from 'react-router-dom';

export default function GameDetail() {
  // useParams() es el gancho que atrapa el ID que viaja en la URL
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#1a0b3b] text-white text-center pt-20">
      <h2 className="text-4xl text-yellow-500 font-bold mb-6">
        Estás viendo el juego número: {id}
      </h2>
      
      <p className="text-gray-400 mb-10">
        Aquí cargaremos toda la información, fotos y precio de este juego en concreto.
      </p>

      {/* Un botón para volver al catálogo siempre viene bien */}
      <Link 
        to="/" 
        className="bg-yellow-500 text-[#1a0b3b] px-6 py-2 rounded font-bold hover:bg-yellow-400 transition"
      >
        Volver al catálogo
      </Link>
    </div>
  );
}