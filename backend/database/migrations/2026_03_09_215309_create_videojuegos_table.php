<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videojuegos', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descripcion');
            $table->string('imagen'); //Aqui guardatemos la ruta: 'juegos/nombrefoto.jpg'
            $table->decimal('precio', 8, 2);
            
            // --- AQUÍ ESTÁ EL TRUCO PARA LAS SECCIONES ---
            $table->decimal('precio_oferta', 8, 2)->nullable(); // Si tiene valor, es una "Promoción"
            $table->date('fecha_lanzamiento'); // Para saber si es "Novedad" o "Próximamente"
            $table->boolean('es_destacado')->default(false); // Por si quieres ponerlo en portada
                
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videojuegos');
    }
};
