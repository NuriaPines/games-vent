<?php

namespace App\Http\Controllers;

use App\Models\Videojuego;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VideojuegoController extends Controller
{
    public function getSecciones() {
    $hoy = now();

    return response()->json([
        'novedades' => Videojuego::where('fecha_lanzamiento', '<=', $hoy)
                        ->orderBy('fecha_lanzamiento', 'desc')
                        ->take(5)->get(),

        'proximamente' => Videojuego::where('fecha_lanzamiento', '>', $hoy)
                        ->get(),

        'promociones' => Videojuego::whereNotNull('precio_oferta')
                        ->get(),

        'catalogo' => Videojuego::all(), // Todo el listado
    ]);
}
}
