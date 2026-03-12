<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\GoogleDriveService;

class TestDriveUpload extends Command
{
    protected $signature = 'drive:test';
    protected $description = 'Subir imagen a Google Drive';

    public function handle()
    {
        $drive = new GoogleDriveService();

        $result = $drive->uploadImage(
            storage_path('app/test.jpg'),
            'test.jpg',
            '1J2tMpECdMBZDhdHLjsggofffgW5GauLH'
        );

        $this->info('Imagen subida correctamente');
        $this->info($result['url']);
    }
}