<?php
class DBInterface
{
  protected $username = "root";//algo
  protected $password = "";//algo
  protected $hostname = "localhost";//algo
  protected $defaultdb = "mydb";

  public function errorConnectingToDB(){
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
  }
}
?>
