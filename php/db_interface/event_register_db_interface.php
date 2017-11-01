<?php
require_once './db_interface.php';


class RegistrationEventDBInterface extends DBInterface{

  function eventRegistrationDB(){

     $connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

     if (!$connection){
       $this->errorConnectingToDB();
     }

     $connection->set_charset("utf8");

     $paramName = $_POST['name'];
     $paramBeginDate = $_POST['beginDay'];
     $paramEndDate = $_POST['endDay'];
     $paramBeginTime = $_POST['beginhour'];
     $paramEndTime = $_POST['endHour'];
     $paramInscriptionPrice = $_POST['inscripPrice'];
     $paramAvailableTickets = $_POST['availableTickets'];
     $paramTicketPrice = $_POST['ticketPrice'];
     $paramSoldTickets = $_POST['soldTickets']; //Inside the data base
     $paramAddedConfig = $_POST['addedConfig']; //Inside the data base
     $paramPreviousData = $_POST['previousData']; //Inside the data base
     $paramEventFinished = $_POST['isFinished']; //Inside the data base
     $paramStatusEvent = $_POST['status']; //Inside the data base
     $paramPlaceId = $_POST['placeId'];
     $paramEventTypeId = $_POST['eventType'];

     $sql = "Call sp_insert_new_event('".$paramName."','"
                                        .$paramBeginDate."','"
                                        .$paramEndDate."','"
                                        .$paramBeginTime."','"
                                        .$paramEndTime."','"
                                        .$paramInscriptionPrice."','"
                                        .$paramAvailableTickets."','"
                                        .$paramTicketPrice."','"
                                        .$paramSoldTickets."','"
                                        .$paramAddedConfig."','"
                                        .$paramPreviousData."','"
                                        .$paramEventFinished."','"
                                        .$paramStatusEvent."','"
                                        .$paramPlaceId."','"
                                        .$paramEventTypeId."')";

      $result = $connection->query($sql);

  }

  function getEventTypeListDB(){

    $connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

    $connection->set_charset("utf8");

    if(!$connection){
      $this->errorConnectingToDB();
    }

    $sql = "Call  sp_get_all_eventtype_event";
    $result = $connection->query($sql);

    $resultJSON = array();
    while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
    }
    echo json_encode($resultJSON);

  }

  function getPlaceListDB(){

    $connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

    $connection->set_charset("utf8");

    if(!$connection){
      $this->errorConnectingToDB();
    }

    $sql = "Call  sp_get_all_place_event";
    $result = $connection->query($sql);

    $resultJSON = array();
    while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
    }
    echo json_encode($resultJSON);

  }

  function getPlaceUnAvailableDB(){

    $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);

    $connection->set_charset("utf8");

    $bDay = $_POST['beginD'];
    $eDay = $_POST['endD'];
    $bTime = $_POST['beginH'];
    $eTime = $_POST['endH'];

    if(!$connection){
      $this->errorConnectingToDB();
    }

    $sql = "Call  sp_get_all_place_not_available_event('".$bDay."','"
                                                          .$eDay."','"
                                                          .$bTime."','"
                                                          .$eTime."')";
    $result = $connection->query($sql);

    $resultJSON = array();
    while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
    }
    echo json_encode($resultJSON);

  }
    function getPlaceDaysDB(){

      $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);

      $connection->set_charset("utf8");

      $idPlace = $_POST['beginD'];

      if(!$connection){
        $this->errorConnectingToDB();
      }

      $sql = "Call  sp_get_all_available_day_event('".$idPlace."')";
      $result = $connection->query($sql);

      $resultJSON = array();
      while ($registro = mysqli_fetch_assoc($result)) {
      $resultJSON[]=$registro;
      }
      echo json_encode($resultJSON);

    }
      function getPlaceScheduleDB(){

        $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);

        $connection->set_charset("utf8");

        $idPlace = $_POST['beginD'];

        if(!$connection){
          $this->errorConnectingToDB();
        }

        $sql = "Call  sp_get_all_available_hour_event('".$idPlace."')";
        $result = $connection->query($sql);

        $resultJSON = array();
        while ($registro = mysqli_fetch_assoc($result)) {
        $resultJSON[]=$registro;
        }
        echo json_encode($resultJSON);

      }

//Code By Jose Solano
 public function  getCategoriesOnEvent(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");
    $paramUserID = $_POST['id'];

    $sql = "Call  sp_get_all_categories_onEvent(".$paramUserID.")";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }
  public function  getEventID(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $sql = "Call  sp_get_CurrentEvent";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  }

  function getEventPlaceCapacityDB(){

    $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);

    $connection->set_charset("utf8");
    $paramPlaceID = $_POST['id'];

    if(!$connection){
      $this->errorConnectingToDB();
    }

    $sql = "Call  sp_get_horary_by_place('".$paramPlaceID."')";
    $result = $connection->query($sql);

    $resultJSON = array();
    while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
    }
    echo json_encode($resultJSON);

  }

  function getStudentsByCategories(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramLevel = $_POST['level'];
    $paramCateWei = $_POST['weight'];
    $paramAge = $_POST['age'];
    $paramGender = $_POST['gender'];
    $paramAcademy = $_POST['academy'];



    $sql = "Call  sp_get_all_athelet_inscribe_by_category('".$paramLevel."','"
                                        .$paramCateWei."','"
                                        .$paramAge."','"
                                        .$paramGender."','"
                                        .$paramAcademy."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);

  }
public function getAcdemiesOnEvent(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramEventID = $_POST['id'];

    $sql = "Call   sp_get_academies_on_event('".$paramEventID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function SaveAtheleOnEvent(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramIdEvent = $_POST['idEvent'];
    $paramIdAthetle = $_POST['idAtlete'];
    $paramWeightCere = $_POST['pWeCere'];
    $paramPosition = $_POST['position'];
    $paramPoints = $_POST['points'];
    $param = 0;



    $sql = "Call  sp_insert_new_athelet_onEvent('".$paramIdEvent."','"
                                        .$paramIdAthetle."','"
                                        .$paramWeightCere."','"
                                        .$paramPosition."','"
                                        .$paramPoints."','"                                        
                                        .$param."')";

    $result = $link->query($sql);

}
public function getEventTypeByEventId(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramEventID = $_POST['id'];

    $sql = "Call   sp_get_eventType_by_eventId('".$paramEventID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function updateUserParticipation(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

   $paramIdAthetle = $_POST['idAthelte'];
    $paramTornamet = $_POST['tornametPar'];
    $paramExibition= $_POST['exhibition'];

    $sql = "Call    sp_update_atlete_participation_based_on_event_type('".$paramIdAthetle."','"
                                        .$paramExibition."','"
                                        .$paramTornamet."')";
    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}
public function getAllAthetlesOnevent(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramEventID = $_POST['id'];

    $sql = "Call   sp_get_all_atletes_on_event('".$paramEventID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function saveWeightCeremony(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramUserID = $_POST['id'];
    $paramWeight= $_POST['weight'];
    $paramidEvent= $_POST['idEvent'];


    $sql = "Call    sp_save_weight_ceremony('".$paramUserID."','"
                                        .$paramWeight."','"
                                        .$paramidEvent."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function getRangeWeight(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramUserID = $_POST['id'];

    $sql = "Call    sp_get_categoryWeight_by_id('".$paramUserID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}
public function desqualified(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramUserID = $_POST['id'];

    $paramWeight= $_POST['ko'];

    $sql = "Call    sp_descualified_atheletonevent('".$paramUserID."','"
                                              .$paramWeight."')";
    $result = $link->query($sql);

}

public function getAllWeight(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $sql = "Call   sp_get_all_category_weight";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function getAllLevels(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $sql = "Call   sp_get_all_levels";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function getAllAges(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $sql = "Call   sp_get_all_age_categories";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function productBySponsor(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramUserID = $_POST['id'];

    $sql = "Call      sp_get_all_products_by_sponsor('".$paramUserID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}
public function saveAcademyOnevent(){
$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramUserID = $_POST['idEvent'];
    $paramWeight= $_POST['idAca'];


    $sql = "Call    sp_save_academy_on_event('".$paramUserID."','"
                                        .$paramWeight."')";

    $result = $link->query($sql);

   $resultJSON = array();
 
}

public function saveorganizationOnevent(){
$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramWeight= $_POST['idorg'];
    $paramidEvent= $_POST['idEvent'];


    $sql = "Call    sp_save_organization_on_event('".$paramWeight."','"
                                        .$paramidEvent."')";

    $result = $link->query($sql);

   
}
public function saveCategoryonEvent(){
$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    
    $paramidEvent= $_POST['idEvent'];
    $paramWeight= $_POST['idweight'];
    $paramidAge = $_POST['idage'];
    $paramidLevel = $_POST['idlevel'];
    $paramGender = $_POST['gender'];


    $sql = "Call    sp_save_categories_on_event('".$paramidEvent."','"
                                        .$paramWeight."','"
                                        .$paramidAge."','"
                                        .$paramidLevel."','"
                                        .$paramGender."')";

    $result = $link->query($sql);

   
}
public function saveSponsorOnEvent(){
$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramSponsorId = $_POST['idposorID'];
    $paraSponsorType= 1;
    $paramidEvent= $_POST['idEvent'];


    $sql = "Call    sp_save_sponsor_on_event('".$paramidEvent."','"
                                        .$paramSponsorId."','"
                                        .$paraSponsorType."')";

    $result = $link->query($sql);

   
}
public function saveproductOneEvent(){
$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramSponsor = $_POST['idsponsor'];
    $paramProductoId= $_POST['idproduct'];
    $paramidEvent= $_POST['idEvent'];


    $sql = "Call    sp_save_product_on_event('".$paramidEvent."','"
                                        .$paramProductoId."','"
                                        .$paramSponsor."')";

    $result = $link->query($sql);

   
}

public function saveResults(){
  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramPoitns = $_POST['points'];
    $paramPosition= $_POST['position'];
    $paramidAth= $_POST['idAthelte'];
    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_insert_result_on_event('".$paramidEvent."','"
                                        .$paramidAth."','"
                                        .$paramPosition."','"
                                        .$paramPoitns."')";

    $result = $link->query($sql);
}

public function getEventsForCalendar(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $sql = "Call sp_get_events_for_calendar";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function getPlaceEvent(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramUserID = $_POST['id'];

    $sql = "Call      sp_get_place_by_eventId('".$paramUserID."')";

    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function UpdateBuyEvent(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

   $paramPoitns = $_POST['available'];
    $paramidAth= $_POST['sold'];
    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_update_envet_on_buy('".$paramidEvent."','"
                                        .$paramidAth."','"
                                        .$paramPoitns."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function cleanEvent(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_clean_config_athelte('".$paramidEvent."')";

    $result = $link->query($sql);

    $sql = "Call     sp_clean_config_academy('".$paramidEvent."')";

    $result = $link->query($sql);

    $sql = "Call     sp_clean_config_categories('".$paramidEvent."')";

    $result = $link->query($sql);

    $sql = "Call      sp_clean_config_sponsor('".$paramidEvent."')";

    $result = $link->query($sql);

    $sql = "Call      sp_clean_config_org('".$paramidEvent."')";

    $result = $link->query($sql);

    $sql = "Call     sp_clean_config_products('".$paramidEvent."')";

    $result = $link->query($sql);

}

public function cleanResult(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramPoitns = 0;
    $paramidAth= 0;
    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_update_envet_on_buy('".$paramidEvent."','"
                                        .$paramidAth."','"
                                        .$paramPoitns."')";


    $result = $link->query($sql);
}

public function cleanWeigh(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $paramPoitns = 0;
    $paramidAth= 0;
    $weight= 0;
    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_update_envet_on_buy('".$paramidEvent."','"
                                        .$paramidAth."','"
                                        .$weight."','"
                                        .$paramPoitns."')";

    $result = $link->query($sql);
}
public function cleanInscription(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_clean_config_athelte('".$paramidEvent."')";

    $result = $link->query($sql);
}

public function updateConfig(){
 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_update_config('".$paramidEvent."')";

    $result = $link->query($sql);
}

public function updtateWeight(){
 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_update_weight('".$paramidEvent."')";

    $result = $link->query($sql);
}

public function UpdateResult(){
   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");


    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_update_finishresult('".$paramidEvent."')";

    $result = $link->query($sql);
}

public function getAllInfoFromEvent ()
{
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_get_all_info_for_event('".$paramidEvent."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  
}

public function updateEvent()
{
   $connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

     if (!$connection){
       $this->errorConnectingToDB();
     }

     $connection->set_charset("utf8");

     $parameventid = $_POST['eventid'];
     $paramName = $_POST['name'];
     $paramBeginDate = $_POST['beginDay'];
     $paramEndDate = $_POST['endDay'];
     $paramBeginTime = $_POST['beginhour'];
     $paramEndTime = $_POST['endHour'];
     $paramInscriptionPrice = $_POST['inscripPrice'];
     $paramAvailableTickets = $_POST['availableTickets'];
     $paramTicketPrice = $_POST['ticketPrice'];
     $paramPlaceId = $_POST['placeId'];
     $paramEventTypeId = $_POST['eventType'];

     $sql = "Call sp_modify_event('".$parameventid."','"
                                        .$paramName."','"
                                        .$paramBeginDate."','"
                                        .$paramEndDate."','"
                                        .$paramBeginTime."','"
                                        .$paramEndTime."','"
                                        .$paramInscriptionPrice."','"
                                        .$paramAvailableTickets."','"
                                        .$paramTicketPrice."','"
                                        .$paramPlaceId."','"
                                        .$paramEventTypeId."')";

      $result = $connection->query($sql);
}

public function getOrg(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramidEvent= $_POST['eventid'];


    $sql = "Call      sp_get_org_on_event('".$paramidEvent."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  
}
public function getSponsor(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_get_all_sponsor_on_event('".$paramidEvent."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  
}
public function getProduct(){
    $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_get_products_on_event('".$paramidEvent."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
  
}

public function mails(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_get_mail_by_athlete_on_event('".$paramidEvent."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function getTeacherEvents(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_get_events_by_teacher('".$paramidEvent."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

public function getStudentsEvents(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

    $link->set_charset("utf8");

    $paramidEvent= $_POST['eventid'];


    $sql = "Call    sp_get_events_by_athelet('".$paramidEvent."')";


    $result = $link->query($sql);

   $resultJSON = array();
   while ($registro = mysqli_fetch_assoc($result)) {
    $resultJSON[]=$registro;
  }
    echo json_encode($resultJSON);
}

}

     $eventRegistration = new RegistrationEventDBInterface();

     if($_POST["function"] == "eventRegistrationDB"){
       $eventRegistration->eventRegistrationDB();
     }
     else if($_POST["function"] == "getEventTypeListDB"){
       $eventRegistration->getEventTypeListDB();
     }
     else if($_POST["function"] == "getPlaceListDB"){
       $eventRegistration->getPlaceListDB();
     }
     else if($_POST["function"] == "getCategoriesOnEvent"){
       $eventRegistration->getCategoriesOnEvent();
     }
     else if($_POST["function"] == "getEventID"){
        $eventRegistration->getEventID();
     }
     else if($_POST["function"] == "getEventPlaceCapacityDB"){
       $eventRegistration->getEventPlaceCapacityDB();
     }
     else if($_POST["function"] == "getStudentsByCategories"){
       $eventRegistration->getStudentsByCategories();
     }
     else if($_POST["function"] == "getPlaceUnAvailableDB"){
       $eventRegistration->getPlaceUnAvailableDB();
     }
     else if($_POST["function"] == "getAcdemiesOnEvent"){
       $eventRegistration->getAcdemiesOnEvent();
     }
    else if($_POST["function"] == "SaveAtheleOnEvent"){
       $eventRegistration->SaveAtheleOnEvent();
     }
    else if($_POST["function"] == "getEventTypeByEventId"){
       $eventRegistration->getEventTypeByEventId();
     }
    else if($_POST["function"] == "updateUserParticipation"){
       $eventRegistration->updateUserParticipation();
     }
    else if($_POST["function"] == "getAllAthetlesOnevent"){
       $eventRegistration->getAllAthetlesOnevent();
     }
    else if($_POST["function"] == "saveWeightCeremony"){
       $eventRegistration->saveWeightCeremony();
     }
     else if($_POST["function"] == "getPlaceDaysDB"){
        $eventRegistration->getPlaceDaysDB();
      }
      else if($_POST["function"] == "getPlaceScheduleDB"){
        $eventRegistration->getPlaceScheduleDB();
      }
      else if($_POST["function"] == "getRangeWeight"){
        $eventRegistration->getRangeWeight();
      }
      else if($_POST["function"] == "desqualified"){
        $eventRegistration->desqualified();
      }
      else if($_POST["function"] == "getAllWeight"){
        $eventRegistration->getAllWeight();
      }
     else if($_POST["function"] == "getAllLevels"){
        $eventRegistration->getAllLevels();
      }
      else if($_POST["function"] == "getAllAges"){
        $eventRegistration->getAllAges();
      }
      else if($_POST["function"] == "productBySponsor"){
        $eventRegistration->productBySponsor();
      }
      else if($_POST["function"] == "saveAcademyOnevent"){
        $eventRegistration->saveAcademyOnevent();
      }
      else if($_POST["function"] == "saveorganizationOnevent"){
        $eventRegistration->saveorganizationOnevent();
      }
      else if($_POST["function"] == "saveCategoryonEvent"){
        $eventRegistration->saveCategoryonEvent();
      }
      else if($_POST["function"] == "saveSponsorOnEvent"){
        $eventRegistration->saveSponsorOnEvent();
      }
      else if($_POST["function"] == "saveproductOneEvent"){
        $eventRegistration->saveproductOneEvent();
      }
       else if($_POST["function"] == "saveResults"){
        $eventRegistration->saveResults();
      }
       else if($_POST["function"] == "getEventsForCalendar"){
        $eventRegistration->getEventsForCalendar();
      }
      else if($_POST["function"] == "getPlaceEvent"){
        $eventRegistration->getPlaceEvent();
      }
      else if($_POST["function"] == "UpdateBuyEvent"){
        $eventRegistration->UpdateBuyEvent();
      }
      else if($_POST["function"] == "cleanEvent"){
        $eventRegistration->cleanEvent();
      }
      else if($_POST["function"] == "cleanWeigh"){
        $eventRegistration->cleanWeigh();
      }
      else if($_POST["function"] == "cleanResult"){
        $eventRegistration->cleanResult();
      }
      else if($_POST["function"] == "cleanInscription"){
        $eventRegistration->cleanInscription();
      }
      else if($_POST["function"] == "updateConfig"){
        $eventRegistration->updateConfig();
      }
      else if($_POST["function"] == "updtateWeight"){
        $eventRegistration->updtateWeight();
      }
      else if($_POST["function"] == "UpdateResult"){
        $eventRegistration->UpdateResult();
      }
      else if($_POST["function"] == "getAllInfoFromEvent"){
        $eventRegistration->getAllInfoFromEvent();
      } 
      else if($_POST["function"] == "updateEvent"){
        $eventRegistration->updateEvent();
      }
      else if($_POST["function"] == "getOrg"){
        $eventRegistration->getOrg();
      }
      else if($_POST["function"] == "getSponsor"){
        $eventRegistration->getSponsor();
      }
      else if($_POST["function"] == "getProduct"){
        $eventRegistration->getProduct();
      }
      else if($_POST["function"] == "mails"){
        $eventRegistration->mails();
      }
      else if($_POST["function"] == "getTeacherEvents"){
        $eventRegistration->getTeacherEvents();
      }
      else if($_POST["function"] == "getStudentsEvents"){
        $eventRegistration->getStudentsEvents();
      }
?>
