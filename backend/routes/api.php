<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoJuegoController;

Route::get('/videojuegos', [VideoJuegoController::class, 'index']); 
