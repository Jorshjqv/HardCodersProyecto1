<?php
require_once "./db_interface.php";

class SystemSettingsDBInterface extends DBInterface{

  public function insertSystemSettings(){
    $connection = mysqli_connect($this->hostname,
                                 $this->username,
                                 '',
                                 $this->defaultdb);

    if(!$connection){
      $this->errorConnectingToDB();
    }

    $app_name = $_POST["papp_name"];
    $direction = $_POST["pdirection"];
    $contact_mail = $_POST["pcontact_mail"];
    $contact_phone = $_POST["pcontact_phone"];
    $latitud = $_POST["platitud"];
    $longitud = $_POST["plongitud"];

    $sql = "call sp_register_system_settings" . "('$app_name',
                                                  '$direction',
                                                  '$contact_mail',
                                                  '$contact_phone',
                                                   $platitud,
                                                   $plongitud)";
    $result = mysqli_query($connection, $sql);

    echo json_encode($result);
    mysqli_close($connection);
  }

  public function updateSystemSettings(){
    $connection = new mysqli($this->hostname,
    $this->username,
    $this->password,
    $this->defaultdb);

    if(!$connection){
      $this->errorConnectingToDB();
    }

    $connection->set_charset("utf8");
    $app_name = $_POST["papp_name"];
    $direction = $_POST["pdirection"];
    $contact_mail = $_POST["pcontact_mail"];
    $contact_phone = $_POST["pcontact_phone"];
    $latitud = $_POST["platitud"];
    $longitud = $_POST["plongitud"];

    $sql = "call sp_update_system_settings"."('$app_name',
                                              '$direction',
                                              '$contact_mail',
                                               $contact_phone,
                                               $latitud,
                                               $longitud)";

    $result = mysqli_query($connection, $sql);

    echo json_encode($result);
    mysqli_close($connection);
  }

  public function getSystemSettings(){
    $link = new  mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

    if (!$link){
      $this->errorConnectingToDB();
    }
    $link->set_charset("utf8");

    $sql = "call  sp_get_all_settings";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }
}

$sys_info = new SystemSettingsDBInterface();

if($_POST["function"] == "getAllSettings"){
  $sys_info->getSystemSettings();
}else if($_POST["function"] == "registerSystemSettings"){
  $sys_info->insertSystemSettings();
}else if($_POST["function"] == "updateSystemSettings"){
  $sys_info->updateSystemSettings();
}

?>
