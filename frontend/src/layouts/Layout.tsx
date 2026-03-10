import React from 'react';

// React.ReactNode es la forma de decirle a TS: "Aquí puede venir cualquier cosa de HTML/React"
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#1a0b3b] text-white">
      <header className="py-10 text-center">
        <h1 className="text-4xl tracking-widest flex justify-center items-center gap-4">
           <span className="text-yellow-500 text-2xl">🔑</span> 
           GAMES VENT 
           <span className="text-yellow-500 text-2xl">🔑</span>
        </h1>
        <nav className="mt-8">
          <ul className="flex justify-center gap-10 text-xs font-bold uppercase tracking-widest">
            <li className="border-b-2 border-white pb-1 cursor-pointer">Catálogo</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition">Promociones</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition">Novedades</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition">Próximamente</li>
          </ul>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {children}
      </main>
    </div>
  );
}