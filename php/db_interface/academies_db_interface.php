<?php
require_once './db_interface.php';

class AcademiesDBInterface extends DBInterface{

  public function  registerAcademy(){
    $paramName = $_POST['name'];
    $paramDir = $_POST['direction'];
    $paramPhone = $_POST['phone'];
    $paramContPerson = $_POST['contactperson'];
    $paramEmail = $_POST['email'];
    $status = 1;
    $link = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
      $this->errorConnectingToDB();
    }
    $link->set_charset("utf8");

    $query = "call sp_register_academy('".$paramName."','"
                                        .$paramDir."','"
                                        .$paramPhone."','"
                                        .$paramContPerson."','"
                                        .$paramEmail."','"
                                        .$status."')";
   $data = $link->query($query);
    mysqli_close($link);
  }

  public function getAcademyByID($paramId){
    $link = new mysqli ($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
			$this->errorConnectingToDB();
		}
    $link->set_charset("utf8");

		$query = "call sp_get_academy_id(".$paramId.")";
		$data = $link->query($query);
    $resultJSON = array();
    while($r = mysqli_fetch_assoc($data)) {
      array_push($resultJSON,$r);
		}
    echo json_encode($resultJSON);
    mysqli_close($link);
  }

  public function getAllAcademies(){
    $link = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
			$this->errorConnectingToDB();
		}
    $link->set_charset("utf8");

		$query = "call sp_get_all_academies";
		$data =  $link->query($query);
    $resultJSON = array();
    while($r = mysqli_fetch_assoc($data)) {
      array_push($resultJSON,$r);
		}

    echo json_encode($resultJSON);
    mysqli_close($link);
  }

  public function updateAcademyById($paramId){
    $paramName = $_POST['name'];
    $paramDir = $_POST['direction'];
    $paramPhone = $_POST['phone'];
    $paramContPerson = $_POST['contactperson'];
    $paramEmail = $_POST['email'];
    $status = 1;
    $link = new mysqli ($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
      $this->errorConnectingToDB();
    }
    $link->set_charset("utf8");
    $query = "call sp_update_academy('".$paramId."','"
                                        .$paramName."','"
                                        .$paramDir."','"
                                        .$paramPhone."','"
                                        .$paramContPerson."','"
                                        .$paramEmail."','"
                                        .$status."')";
    $data =  $link->query($query);
    mysqli_close($link);
  }

  public function inactivateAcademyById($paramId){
    $status = $_POST['status'];
    $link = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
      $this->errorConnectingToDB();
    }
    $link->set_charset("utf8");
    
    $query = "call sp_inactivate_academy('".$paramId."','"
                                           .$status."')";
    $data =  $link->query($query);
    mysqli_close($link);
  }

  public function deleteAcademyById($paramId){
    print 'Not defined yet';
  }
}

$academy_int = new AcademiesDBInterface();

if($_POST["function"] == "register"){
  $academy_int->registerAcademy();
}
else if($_POST["function"] == "update"){
  $academy_int->updateAcademyById($_POST["idToEdit"]);
}
else if($_POST["function"] == "inactivate"){
  $academy_int->inactivateAcademyById($_POST["idToEdit"]);
}
else if($_POST["function"] == "getAllAcademies"){
  $academy_int->getAllAcademies();
}
else if($_POST["function"] == "getAcademyByID"){
  $academy_int->getAcademyByID($_POST["idToEdit"]);
}

else {print 'Waiting for function to execute';}
?>
