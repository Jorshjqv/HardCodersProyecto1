 <?php    
    $filename=$_FILES['file']['name'];
    $email = $_POST['email'];
    
    $info = pathinfo($_FILES['file']['name']);
    $ext = $info['extension']; // get the extension of the file
    $newname = $email.".".$ext; 

    $target = '../../images/users/'.$newname;
    move_uploaded_file($_FILES['file']['tmp_name'], $target);


?>