<?php
$path = $_POST['path'];
$directory = (string)$path;

if ( ! is_dir($directory)) {
    exit('Invalid diretory path');
}

$files = array();

foreach (scandir($directory) as $file) {
    if ('.' === $file) continue;
    if ('..' === $file) continue;

    $files[] = $file;
}

echo json_encode($files);
?>