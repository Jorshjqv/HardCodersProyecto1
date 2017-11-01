<?php
require_once './db_interface.php';

class reports_db_interface extends DBInterface{

  public function getAllCategoriesOnEventByEventId($paramId){
     $link = new mysqli ($this->hostname, $this->username, $this->password, $this->defaultdb);
     if (!$link){
       $this->errorConnectingToDB();
     }
     $link->set_charset("utf8");
     $sql = "CALL sp_get_all_categories_event('".$paramId."')";
     $data= $link->query($sql);
     $resultJSON = array();
     while($r = mysqli_fetch_assoc($data)) {
       array_push($resultJSON,$r);
     }
     echo json_encode($resultJSON);
  }

  public function getAthleteOnEventByEventId($paramId){
    $link = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
      $this->errorConnectingToDB();
    }
    $link->set_charset("utf8");

    $sql = "CALL sp_get_athlete_event('".$paramId."')";
    $data= $link->query($sql);
    $resultJSON = array();
    while($r = mysqli_fetch_assoc($data)) {
      array_push($resultJSON,$r);
    }
    echo json_encode($resultJSON);
    mysqli_close($link);
  }
  public function getAthleteOnCategoryAndEvent($paramId,$paramAge,$paramLevel,$paramWeight,$paramGender){
    $link = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
      $this->errorConnectingToDB();
    }
    $link->set_charset("utf8");

    $sql = "call sp_get_athlete_event_by_category('".$paramId."','"
                                                    .$paramAge."','"
                                                    .$paramLevel."','"
                                                    .$paramWeight."','"
                                                    .$paramGender."')";
    $data=$link->query($sql);
    $resultJSON = array();
    while($r = mysqli_fetch_assoc($data)) {
      array_push($resultJSON,$r);
    }
    echo json_encode($resultJSON);
    mysqli_close($link);
  }
}

$reports_interface = new reports_db_interface();
if($_POST["function"] == "getAllCategoriesOnEventByEventId"){
  $reports_interface->getAllCategoriesOnEventByEventId($_POST["id"]);
}
else if($_POST["function"] == "getAthleteOnEventByEventId"){
  $reports_interface->getAthleteOnEventByEventId($_POST["id"]);
}
else if($_POST["function"] == "getAthleteOnCategoryAndEvent"){
  $reports_interface->getAthleteOnCategoryAndEvent($_POST["id"],$_POST["age"],$_POST["level"],$_POST["weight"],$_POST["gender"]);
}
?>
