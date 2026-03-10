import { useEffect, useState } from 'react';
import Layout from './layouts/Layout.tsx';
import GameCard from './components/GameCard.tsx';

// 1. Definimos la forma de los datos
interface Videojuego {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
}

function App() {
  // 2. Le asignamos el tipo al estado
  const [juegos, setJuegos] = useState<Videojuego[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/videojuegos')
      .then(res => res.json())
      .then((data: Videojuego[]) => { // 3. También le decimos que lo que llega es ese tipo
        setJuegos(data);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
      
      {juegos.map(juego => (
        /* IMPORTANTE: En Flexbox, necesitamos que cada "celda" tenga un ancho fijo 
           para que parezca una rejilla. 'w-64' son 256px.
        */
        <div key={juego.id} className="w-full sm:w-64">
          <GameCard 
            titulo={juego.titulo}
            precio={juego.precio}
            // Recuerda el /storage/ que descubrimos en la carpeta de Laravel
            imagen={juego.imagen} 
          />
        </div>
      ))}

    </div>
    </Layout>
  );
}

export default App;