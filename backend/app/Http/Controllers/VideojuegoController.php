<?php

namespace App\Http\Controllers;

use App\Models\Videojuego;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VideojuegoController extends Controller
{
    public function index() {
        return Videojuego::all();
    }
    
    public function getSecciones() {
    return response()->json([
            'novedades' => Videojuego::where('seccion', 'novedades')->get(),
            'proximamente' => Videojuego::where('seccion', 'proximamente')->get(),
            'promociones' => Videojuego::where('seccion', 'promociones')->get(),
            'catalogo' => Videojuego::all(), // Todo el listado
        ]);
    }

    public function getNovedades() {
        return response()->json(Videojuego::where('seccion', 'novedades')->get());
    }

    public function getProximamente() {
        return response()->json(Videojuego::where('seccion', 'proximamente')->get());
    }

    public function getPromociones() {
        return response()->json(Videojuego::where('seccion', 'promociones')->get());
    }

}
