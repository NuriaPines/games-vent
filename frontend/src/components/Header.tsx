import React from "react";
import { NavLink } from "react-router-dom";

// 1. TRUCO PRO: Creamos un mini-componente para los enlaces.
// Así escribimos las clases de Tailwind una sola vez.
interface HeaderMenuProps {
  to: string;
  children: React.ReactNode;
}
function HeaderMenu({ to, children }: HeaderMenuProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={
          ({ isActive }) =>
            isActive
              ? "border-b-2 pb-1 text-white hover:[text-shadow:_0_0_15px_#7dd3fc]" // ESTADO ACTIVO
              : "text-gray-400 hover:text-white hover:[text-shadow:_0_0_15px_#7dd3fc] transition cursor-pointer" // ESTADO INACTIVO
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
export default function Header() {
  return (
    <header className="py-10 text-center">
      <h1 className="text-4xl tracking-widest flex justify-center items-center gap-4">
        <span className="text-yellow-500 text-2xl">🔑</span>
        GAMES VENT
        <span className="text-yellow-500 text-2xl">🔑</span>
      </h1>
      <nav className="mt-8">
        <ul className="flex flex-col sm:flex-row sm:justify-center gap-10 text-xs font-bold uppercase tracking-widest">
          {/* 3. Usamos nuestro nuevo mini-componente. ¡Mira qué limpio y fácil de leer! */}
          <HeaderMenu to="/">Catálogo</HeaderMenu>
          <HeaderMenu to="/promociones">Promociones</HeaderMenu>
          <HeaderMenu to="/novedades">Novedades</HeaderMenu>
          <HeaderMenu to="/proximamente">Próximamente</HeaderMenu>
        </ul>
      </nav>
    </header>
  );
}
