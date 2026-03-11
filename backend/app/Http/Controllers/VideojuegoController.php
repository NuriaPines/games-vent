<?php

namespace App\Http\Controllers;

use App\Models\Videojuego;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VideojuegoController extends Controller
{
    public function index() {
        return Videojuego::orderBy('titulo')->get();
    }
    
    public function getSecciones() {
    return response()->json([
            'novedades' => Videojuego::orderBy('titulo')->where('seccion', 'novedades')->get(),
            'proximamente' => Videojuego::orderBy('titulo')->where('seccion', 'proximamente')->get(),
            'promociones' => Videojuego::orderBy('titulo')->where('seccion', 'promociones')->get(),
            ]);
    }

    public function getNovedades() {
        return response()->json(Videojuego::orderBy('titulo')->where('seccion', 'novedades')->get());
    }

    public function getProximamente() {
        return response()->json(Videojuego::orderBy('titulo')->where('seccion', 'proximamente')->get());
    }

    public function getPromociones() {
        return response()->json(Videojuego::orderBy('titulo')->where('seccion', 'promociones')->get());
    }

    public function getGameDetail($id) {
        // Buscamos el juego por su ID
        $juego = Videojuego::find($id);

        // Si no existe, devolvemos un error 404 en JSON
        if (!$juego) {
            return response()->json(['message' => 'Juego no encontrado'], 404);
        }

        // Si existe, lo devolvemos
        return response()->json($juego);
    }

}
