<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\GoogleDriveService;
use App\Models\Videojuego; // 🔑 Asegúrate de que el modelo se llame así

class SyncDriveImages extends Command
{
    protected $signature = 'drive:sync';
    protected $description = 'Sincroniza las URLs de Google Drive con la BD de videojuegos';

    public function handle()
    {
        $this->info('Conectando con Google Drive...');
        $driveService = new GoogleDriveService();
        $folderId = '1J2tMpECdMBZDhdHLjsggofffgW5GauLH'; 

        $filesInDrive = $driveService->listFilesInFolder($folderId);
        $this->info('Se han encontrado ' . count($filesInDrive) . ' imágenes en Drive.');

        $videojuegos = Videojuego::all();
        $actualizados = 0;

        foreach ($videojuegos as $juego) {
            $fileId = null;

            // 1. Intentamos sacar la ID si ya es una URL de Drive
            if (str_contains($juego->imagen, 'id=')) {
                // Extrae lo que hay después de 'id='
                $parts = explode('id=', $juego->imagen);
                $fileId = explode('&', $parts[1])[0]; // Por si tiene el &sz al final
            } 
            
            // 2. Si no es URL, buscamos por nombre de archivo (como antes)
            if (!$fileId) {
                $nombreArchivoDB = basename($juego->imagen);
                $fileMatch = collect($filesInDrive)->firstWhere('name', $nombreArchivoDB);
                if ($fileMatch) {
                    $fileId = $fileMatch->getId();
                }
            }

            if ($fileId) {
                // Formato thumbnail que no da error 403 en React
                $nuevaUrl = "https://drive.google.com/thumbnail?id={$fileId}&sz=w1000";
                
                if ($juego->imagen !== $nuevaUrl) {
                    $juego->imagen = $nuevaUrl;
                    $juego->save();
                    $actualizados++;
                    $this->line("✅ Actualizado a Thumbnail: {$juego->titulo}");
                }
            } else {
                $this->warn("❌ No se pudo identificar en Drive: {$juego->titulo}");
            }
        }

        $this->info("¡Listo! Se han actualizado {$actualizados} videojuegos.");
    }
}