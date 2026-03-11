import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import GameCard from "./components/GameCard.tsx";
import GamesDetails from "./layouts/GamesDetails.tsx";

// 1. Definimos la forma de los datos
interface Videojuego {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

interface Novedades {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
}

interface Promociones {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
}

interface Proximamente {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
}

function App() {

  //PETICIONES A LA API
  const [juegos, setJuegos] = useState<Videojuego[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/videojuegos")
      .then((res) => res.json())
      .then((data: Videojuego[]) => {
        setJuegos(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const [novedades, setNovedades] = useState<Novedades[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/novedades")
      .then((res) => res.json())
      .then((data: Novedades[]) => {
        setNovedades(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const [promociones, setPromociones] = useState<Promociones[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/promociones")
      .then((res) => res.json())
      .then((data: Promociones[]) => {
        setPromociones(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const [proximamente, setProximamente] = useState<Proximamente[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/proximamente")
      .then((res) => res.json())
      .then((data: Proximamente[]) => {
        setProximamente(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  

  // GUARDAMOS LOS JUEGOS POR SECCIONES EN CONSTANTES PARA USARLOS EN LAS RUTAS
  const novedadesVideogames = (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
      {novedades.map((novedad) => (
        <div key={novedad.id} className="w-full sm:w-64">
          <GameCard
            id={novedad.id}
            titulo={novedad.titulo}
            precio={novedad.precio}
            imagen={novedad.imagen}
          />
        </div>
      ))}
    </div>
  );
  const promocionesVideogames = (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
      {promociones.map((promocion) => (
        <div key={promocion.id} className="w-full sm:w-64">
          <GameCard
            id={promocion.id}
            titulo={promocion.titulo}
            precio={promocion.precio}
            imagen={promocion.imagen}
          />
        </div>
      ))}
    </div>
  );

  const proximamenteVideogames = (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
      {proximamente.map((proximamente) => (
        <div key={proximamente.id} className="w-full sm:w-64">
          <GameCard
            id={proximamente.id}
            titulo={proximamente.titulo}
            precio={proximamente.precio}
            imagen={proximamente.imagen}
          />
        </div>
      ))}
    </div>
  );

  // CONSTANTE PARA TODOS LOS VIDEOJUEGOS (CATÁLOGO)
  const allVideogames = (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
      {juegos.map((juego) => (
        <div key={juego.id} className="w-full sm:w-64">
          <GameCard
            id={juego.id}
            titulo={juego.titulo}
            precio={juego.precio}
            imagen={juego.imagen}
          />
        </div>
      ))}
    </div>
  );

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout>{allVideogames}</Layout>} />
          <Route path="/novedades" element={<Layout>{novedadesVideogames}</Layout>} />
          <Route path="/promociones" element={<Layout>{promocionesVideogames}</Layout>} />
          <Route path="/proximamente" element={<Layout>{proximamenteVideogames}</Layout>} />
          <Route path="/juego/:id" element={<GamesDetails/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
