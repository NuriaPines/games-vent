<?php

namespace App\Services;

use Google\Client;
use Google\Service\Drive;
use Google\Service\Drive\DriveFile;

class GoogleDriveService
{
    private Drive $drive;
    
    public function __construct()
    {
        $client = new Client();
        
        // 🔑 ¡AQUÍ ESTÁ LA MAGIA NUEVA! 
        // Leemos las credenciales que pusiste en tu archivo .env
        $client->setClientId(env('GOOGLE_CLIENT_ID'));
        $client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
        $client->refreshToken(env('GOOGLE_REFRESH_TOKEN'));
        
        $this->drive = new Drive($client);
    }
    
    public function uploadImage(string $filePath, string $fileName, string $folderId)
    {
        $fileMetadata = new DriveFile([
            'name' => $fileName,
            'parents' => [$folderId], // Shared Drive o carpeta específica
        ]);

        $file = $this->drive->files->create($fileMetadata, [
            'data' => file_get_contents($filePath),
            'mimeType' => mime_content_type($filePath),
            'uploadType' => 'multipart',
            'fields' => 'id',
            'supportsAllDrives' => true // 🔑 obligatorio para Shared Drives
        ]);

        // Hacer pública la imagen
        $permission = new \Google\Service\Drive\Permission([
            'type' => 'anyone',
            'role' => 'reader',
        ]);
        
        $this->drive->permissions->create($file->id, $permission, [
            'supportsAllDrives' => true // 🔑 también aquí
        ]);

        return [
            'file_id' => $file->id,
            'url' => "https://drive.google.com/uc?id={$file->id}"
        ];
    }

    public function listFilesInFolder(string $folderId){
        $optParams = [
            // Buscamos archivos dentro de la carpeta que no estén en la papelera
            'q' => "'{$folderId}' in parents and trashed = false", 
            'fields' => 'files(id, name)', // Solo necesitamos el ID y el nombre
            'pageSize' => 1000, 
            'supportsAllDrives' => true,
            'includeItemsFromAllDrives' => true,
        ];

        $results = $this->drive->files->listFiles($optParams);
        return $results->getFiles();
    }
}