<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoJuegoController;

Route::get('/videojuegos', [VideoJuegoController::class, 'index']);
Route::get("/secciones", [VideoJuegoController::class, 'getSecciones']);

Route::get('/novedades', [VideoJuegoController::class, 'getNovedades']);
Route::get('/proximamente', [VideoJuegoController::class, 'getProximamente']);
Route::get('/promociones', [VideoJuegoController::class, 'getPromociones']);