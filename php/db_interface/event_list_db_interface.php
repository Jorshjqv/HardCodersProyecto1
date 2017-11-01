<?php

require_once './db_interface.php';

class ListEventsDBInterface extends DBInterface{

function getAllEventsDB() {
  //$connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
  $connection = new mysqli ($this->hostname, $this->username, $this->password, $this->defaultdb);
  $connection->set_charset("utf8");
  if(!$connection){
    $this->errorConnectingToDB();
  }
  $sql = "Call sp_get_all_events_event";
  $rows = array();
  $result = $connection->query($sql);

  while($row = mysqli_fetch_assoc($result)){
    array_push($rows, $row);
  }
  echo json_encode($rows);
  }

  function getAllEventsAddedConfigDB() {
    //$connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    $connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
    $connection->set_charset("utf8");
    if(!$connection){
      $this->errorConnectingToDB();
    }
    $sql = "Call sp_get_all_events_added_config_event";
    $rows = array();
    $result = $connection->query($sql);

    while($row = mysqli_fetch_assoc($result)){
      array_push($rows, $row);
    }
    echo json_encode($rows);
    }

    function getAllEventsPreviousDataDB() {
      $connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
      $connection->set_charset("utf8");
      if(!$connection){
        $this->errorConnectingToDB();
      }
      $sql = "Call sp_get_all_events_previous_data_event";
      $rows = array();
      $result = $connection->query($sql);

      while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
      }
      echo json_encode($rows);
      }

      function getAllEventsIsFinishedDB() {
        $connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
        $connection->set_charset("utf8");
        if(!$connection){
          $this->errorConnectingToDB();
        }
        $sql = "Call sp_get_all_events_isFinished_event";
        $rows = array();
        $result = $connection->query($sql);

        while($row = mysqli_fetch_assoc($result)){
          array_push($rows, $row);
        }
        echo json_encode($rows);
        }

        function getAllPastEventDB() {
          //$connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
          $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
          $connection->set_charset("utf8");

          $paraToday = $_POST['date'];

          if(!$connection){
            $this->errorConnectingToDB();
          }
          $sql = "Call sp_get_all_past_events_event('".$paraToday."')";
          $rows = array();
          $result = $connection->query($sql);

          while($row = mysqli_fetch_assoc($result)){
            array_push($rows, $row);
          }
          echo json_encode($rows);
          }

          function getAllPresentEventDB() {
            //$connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
            $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
            $connection->set_charset("utf8");

            $paraToday = $_POST['date'];

            if(!$connection){
              $this->errorConnectingToDB();
            }
            $sql = "Call sp_get_all_present_events_event('".$paraToday."')";
            $rows = array();
            $result = $connection->query($sql);

            while($row = mysqli_fetch_assoc($result)){
              array_push($rows, $row);
            }
            echo json_encode($rows);
            }

            function getAllFutureEventDB() {
              //$connection = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
              $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
              $connection->set_charset("utf8");

              $paraToday = $_POST['date'];

              if(!$connection){
                $this->errorConnectingToDB();
              }
              $sql = "Call sp_get_all_future_events_event"."('$paraToday')";
              $rows = array();
              $result = $connection->query($sql);

              while($row = mysqli_fetch_assoc($result)){
                array_push($rows, $row);
              }
              echo json_encode($rows);
              }

              public function deleteEventDB(){

                $connection = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
                $connection->set_charset("utf8");

                $parameEventId = $_POST['id'];

                $sql = "Call  sp_delete_event(".$parameEventId.")";

                $result = $connection->query($sql);

              }
}

$eventsList= new ListEventsDBInterface();

if($_POST["function"] == "getAllEventsDB"){
  $eventsList->getAllEventsDB();
}
elseif ($_POST["function"] == "getAllPastEventDB") {
  $eventsList->getAllPastEventDB();
}
elseif ($_POST["function"] == "getAllPresentEventDB") {
  $eventsList->getAllPresentEventDB();
}
elseif ($_POST["function"] == "getAllFutureEventDB") {
  $eventsList->getAllFutureEventDB();
}
elseif ($_POST["function"] == "deleteEventDB") {
  $eventsList->deleteEventDB();
}


?>
