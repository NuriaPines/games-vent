import React from 'react';
import Header from '../components/Header.tsx';

// React.ReactNode es la forma de decirle a TS: "Aquí puede venir cualquier cosa de HTML/React"
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#1a0b3b] text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {children}
      </main>
    </div>
  );
}