<?php
require_once './db_interface.php';

class UsersDBInterface extends DBInterface{

  public function  registerUser(){
     $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramID = $_POST['user_id'];
     $paramName1 = $_POST['first_name'];
     $paramName2 = $_POST['second_name'];
     $paramLastName1 = $_POST['lastname1'];
     $paramLastName2 = $_POST['lastname2'];
     $paramBirth = $_POST['birth'];
     $paramAge = $_POST['age'];
     $paramEmail = $_POST['email'];
     $paramGender = $_POST['gender'];
     $paramPass = $_POST['password'];
     $paramIsFirst = $_POST['firstLog'];
     $paramUserType = $_POST['usertype'];
     $paramStatus = $_POST['status'];
     $paramPhone = $_POST['phone'];

    $sql = "Call  sp_insert_new_user('".$paramID."','"
                                        .$paramName1."','"
                                        .$paramName2."','"
                                        .$paramLastName1."','"
                                        .$paramLastName2."','"
                                        .$paramBirth."','"
                                        .$paramAge."','"
                                        .$paramEmail."','"
                                        .$paramGender."','"
                                        .$paramPass."','"
                                        .$paramIsFirst."','"
                                        .$paramUserType."','"
                                        .$paramStatus."','"
                                        .$paramPhone."')";

    $result = $link->query($sql);

    }

  public function getAllUsers(){
    $link = new  mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
      $this->errorConnectingToDB();
    }
    $link->set_charset("utf8");
    $sql = "call  sp_get_all_users";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function getAcademiesDropDown(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $sql = "CALL  sp_get_dropdown_academies";
    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function getTeacherForAcademy(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramIDAcademy = $_POST['id'];
    $sql = "Call  sp_get_all_teacher_from_academy('".$paramIDAcademy."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);

  }

  public function updateUser(){
     $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

     $pid = $_POST['id'];
     $paramID = $_POST['user_id'];
     $paramName1 = $_POST['first_name'];
     $paramName2 = $_POST['second_name'];
     $paramLastName1 = $_POST['lastname1'];
     $paramLastName2 = $_POST['lastname2'];
     $paramBirth = $_POST['birth'];
     $paramAge = $_POST['age'];
     $paramGender = $_POST['gender'];
     $paramPhone = $_POST['phone'];

    $sql = "Call  sp_modify_user('".$pid."','"
                                        .$paramID."','"
                                        .$paramName1."','"
                                        .$paramName2."','"
                                        .$paramLastName1."','"
                                        .$paramLastName2."','"
                                        .$paramBirth."','"
                                        .$paramAge."','"
                                        .$paramGender."','"
                                        .$paramPhone."')";

    $result = $link->query($sql);
    echo json_encode($result);
  }

  public function getCategoryByAge(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUseAge = $_POST['age'];
    $sql = "Call  sp_get_age_category_based_on_age('".$paramUseAge."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function getUserTypes(){
    $link = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
    if (!$link){
      $this->errorConnectingToDB();
    }
    $query = "call  sp_get_user_types";
    $data = mysqli_query($link,$query);
    $resultJSON = array();
    while($r = mysqli_fetch_assoc($data)) {
      array_push($resultJSON,$r);
    }

    echo json_encode($resultJSON);
    mysqli_close($link);
  }

   public function getCategoryLevel(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
    $sql = "Call  sp_get_all_categoryLevels";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function getCategoryWeight(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
    $paramUseWeight = $_POST["weight"];

    $sql = "Call  sp_get_weight_category_based_on_user_weight('".$paramUseWeight."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function  checkMail(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUseMail = $_POST['mail'];

    $sql = "Call  sp_check_username('".$paramUseMail."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function  getuserId(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_get_userid_by_identification('".$paramUserID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function  SaveTeacher(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id_user'];
     $paramAcadeID = $_POST['id_academy'];


    $sql = "Call  sp_insert_teacher('".$paramUserID."','"
                                      .$paramAcadeID."')";

    $result = $link->query($sql);

    }

    public function  SaveAthelet(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramWeight = $_POST['weight'];
    $paramHeight = $_POST['height'];
    $paramWon_tornaments = $_POST['won_tornaments'];
    $paramExibitionsP = $_POST['exibitions_participated'];
    $paramTornaments_participated = $_POST['tornaments_participated'];
    $paramIdUser = $_POST['id_user'];
    $paramTeacher_id_teacher = $_POST['Teacher_id_teacher'];
    $paramAcadeID = $_POST['Academy_id_academy'];
    $paramlevel = $_POST['CategoryLevel_id_category_level'];
    $paramCateWeight = $_POST['CategoryWeight_id_category_weight'];
    $paramCateAge = $_POST['CategoryAge_id_category_age'];



    $sql = "Call  sp_insert_new_athelete('".$paramWeight."','"
                                      .$paramHeight."','"
                                      .$paramWon_tornaments."','"
                                      .$paramExibitionsP."','"
                                      .$paramTornaments_participated."','"
                                      .$paramIdUser."','"
                                      .$paramTeacher_id_teacher."','"
                                      .$paramAcadeID."','"
                                      .$paramlevel."','"
                                      .$paramCateWeight."','"
                                      .$paramCateAge."')";

    $result = $link->query($sql);

    }

    public function  getTeacherID(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_get_teacherId_by_UserId(".$paramUserID.")";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function deleteUser(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_delete_user(".$paramUserID.")";

    $result = $link->query($sql);

  }
public function getUserForModify(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_get_user_by_id(".$paramUserID.")";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}
public function getTeacherForModify(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_get_teacher_by_userId(".$paramUserID.")";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function updateTeacher(){
 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
    $paramUserID = $_POST['id'];
    $paramAcadeID = $_POST['id_academy'];


    $sql = "Call  sp_modify_teacher('".$paramUserID."','"
                                      .$paramAcadeID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function UpdateAthelet(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
    $paramUserID = $_POST["id"];
    $paramWeight = $_POST["weight"];
    $paramHeight = $_POST["height"];
    $paramWon_tornaments = $_POST["won_tornaments"];
    $paramExibitionsP = $_POST["exibitions_participated"];
    $paramTornaments_participated = $_POST["tornaments_participated"];
    $paramTeacher_id_teacher = $_POST["Teacher_id_teacher"];
    $paramAcadeID = $_POST["Academy_id_academy"];
    $paramlevel = $_POST["CategoryLevel_id_category_level"];
    $paramCateWeight = $_POST["CategoryWeight_id_category_weight"];
    $paramCateAge = $_POST["CategoryAge_id_category_age"];



    $sql = "Call  sp_modify_athlete('".$paramUserID."','"
                                      .$paramWeight."','"
                                      .$paramHeight."','"
                                      .$paramWon_tornaments."','"
                                      .$paramExibitionsP."','"
                                      .$paramTornaments_participated."','"
                                      .$paramTeacher_id_teacher."','"
                                      .$paramAcadeID."','"
                                      .$paramlevel."','"
                                      .$paramCateWeight."','"
                                      .$paramCateAge."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function getStudentForModify(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_get_athelet_by_userId(".$paramUserID.")";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);

}

    public function  getStudentsByTeacherId(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_get_all_students_by_teacherID(".$paramUserID.")";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function getStudentsByAcademyId($paramAcademyID){
    $link = new mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
    $link->set_charset("utf8");
    
    $sql = "CALL `sp_get_students_from_academy_by_id`(".$paramAcademyID.")";
    $result = $link -> query($sql);
    $resultJSON = array();
    while ($registro = mysqli_fetch_assoc($result)) {
      $resultJSON[]=$registro;
    }
    echo json_encode($resultJSON);
  }

  public function checkUserId(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
     $paramUserID = $_POST['id'];

    $sql = "Call  sp_check_user_identification(".$paramUserID.")";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  public function getUserIdByEmail(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
    $email = $_POST["email"];

    $sql = "Call  sp_get_user_id_by_email('".$email."')";

    $result = $link->query($sql);
    $resultJSON = array();
    while ($registro = mysqli_fetch_assoc($result)) {
     $resultJSON[]=$registro;
    }
    echo json_encode($resultJSON);
  }
}

$user = new UsersDBInterface();

if($_POST["function"] == "insert"){
  $user->registerUser();

}
else if($_POST["function"] == "updateUser"){
  $user->updateUser();
}
else if($_POST["function"] == "getTeacherForAcademy"){
  $user->getTeacherForAcademy();
}
else if($_POST["function"] == "getAcademiesDropDown"){
$user->getAcademiesDropDown();
}
else if($_POST["function"] == "getUserType"){
$user -> getUserTypes();
}
else if($_POST["function"] == "getCategoryByAge"){
$user -> getCategoryByAge();
}
else if($_POST["function"] == "getCategoryWeight"){
$user -> getCategoryWeight();
}
else if($_POST["function"] == "checkMail"){
$user -> checkMail();
}
else if($_POST["function"] == "getuserId"){
$user -> getuserId();
}
else if($_POST["function"] == "SaveTeacher"){
$user -> SaveTeacher();
}
else if($_POST["function"] == "SaveAthelet"){
  $user -> SaveAthelet();
}
else if($_POST["function"] == "getTeacherID"){
  $user -> getTeacherID();
}
else if($_POST["function"] == "getCategoryLevel"){
$user -> getCategoryLevel();
}
else if($_POST["function"] == "getAllUsers"){
$user -> getAllUsers();
}
else if($_POST["function"] == "deleteUser"){
$user -> deleteUser();
}
else if($_POST["function"] == "getUserForModify"){
$user -> getUserForModify();
}
else if($_POST["function"] == "getTeacherForModify"){
$user -> getTeacherForModify();
}
else if($_POST["function"] == "updateTeacher"){
  $user -> updateTeacher();
}
else if($_POST["function"] == "UpdateAthelet"){
  $user -> UpdateAthelet();
}
else if($_POST["function"] == "getStudentForModify"){
    $user -> getStudentForModify();
}
else if($_POST["function"] == "getStudentsByTeacherId"){
    $user -> getStudentsByTeacherId();
}
else if($_POST["function"] == "getStudentsByAcademyId"){
  $user -> getStudentsByAcademyId($_POST['academyID']);
}
else if($_POST["function"] == "checkUserId"){
  $user -> checkUserId();
}else if($_POST["function"] == "getUserIdByEmail"){
  $user -> getUserIdByEmail();
}

else {print 'Waiting for function to execute';}
?>
