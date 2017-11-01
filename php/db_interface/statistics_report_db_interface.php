<?php
   require_once './db_interface.php';

   class StatisticsReportDBInterface extends DBInterface{

     public function getEvents(){
       $link = new  mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

       if (!$link){
         $this->errorConnectingToDB();
       }
       $link->set_charset("utf8");

       $sql = "call  sp_get_all_events";

       $result = $link->query($sql);

      $resultJSON = array();
      while ($registro = mysqli_fetch_assoc($result)) {
       $resultJSON[]=$registro;
     }
       echo json_encode($resultJSON);
     }


     public function getPlaces(){
       $link = new  mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

       if (!$link){
         $this->errorConnectingToDB();
       }
       $link->set_charset("utf8");

       $sql = "call  sp_get_all_places";

       $result = $link->query($sql);

       $resultJSON = array();
       while ($registro = mysqli_fetch_assoc($result)) {
         $resultJSON[]=$registro;
       }
       echo json_encode($resultJSON);
     }


     public function getAthletesOnEvent(){
       $link = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);

       if (!$link){
         $this->errorConnectingToDB();
       }
       $link->set_charset("utf8");

       $sql = "call  sp_get_all_athletes_on_event";

       $result = $link->query($sql);

       $resultJSON = array();
       while ($registro = mysqli_fetch_assoc($result)) {
         $resultJSON[]=$registro;
       }
        echo json_encode($resultJSON);
       }
   }

   $stats_info = new StatisticsReportDBInterface();

   if($_POST["function"] == "getAllEvents"){
     $stats_info->getEvents();
   }else if($_POST["function"] == "getAllPlaces"){
     $stats_info->getPlaces();
   }else if($_POST["function"] == "getAthletesOnEvent"){
     $stats_info->getAthletesOnEvent();
   }
 ?>
