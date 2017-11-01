<?php
  require_once "./db_interface.php";

  class OrganizationsDBInterface extends DBInterface{

    public function registerOrganization(){
      $connection = new mysqli($this->hostname,
                                      $this->username,
                                      $this->password,
                                      $this->defaultdb);

     if(!$connection){
        $this->errorConnectingToDB();
      }

      $connection->set_charset("utf8");

      $name = $_POST['pname'];
      $description = $_POST['pdescription'];
      $legalDocument = $_POST['plegal_document'];
      $status = 1;
      $organizationType = $_POST['porganization_type'];

      $sql = "CALL sp_register_organization"."('$name', '$description', $legalDocument, $status, $organizationType)";

      $result = $connection->query($sql);

      echo json_encode($result);
      mysqli_close($connection);
    }

    public function getOrganizationType(){
      $connection = mysqli_connect($this->hostname,
                                      $this->username,
                                      '',
                                      $this->defaultdb);
      if(!$connection){
        $this->errorConnectingToDB();
      }
      $connection->set_charset("utf8");
      $sql = "call sp_get_organization_type";
      $rows = array();
      $result = mysqli_query($connection, $sql);

      while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
      }
      echo json_encode($rows);
      mysqli_close($connection);
    }

    public function getAllOrganizations(){
      $connection = mysqli_connect($this->hostname,
                                      $this->username,
                                      $this->password,
                                      $this->defaultdb);
      if(!$connection){
        $this->errorConnectingToDB();
      }
      $connection->set_charset("utf8");
      $sql = "call sp_get_all_organizations";
      $rows = array();
      $result = mysqli_query($connection, $sql);

      while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
      }
      echo json_encode($rows);
      mysqli_close($connection);
    }

    public function getOrganizationByName(){
      $connection = mysqli_connect($this->hostname,
                                      $this->username,
                                      $this->password,
                                      $this->defaultdb);
      if(!$connection){
        $this->errorConnectingToDB();
      }
      $connection->set_charset("utf8");
      $name = $_POST["pname"];
      $sql = "call sp_search_organization_by_name" . "('$name')";

      $rows = array();
      $result = mysqli_query($connection, $sql);

      while($row = mysqli_fetch_assoc($result)){
        array_push($rows, $row);
      }

      echo json_encode($rows);
      mysqli_close($connection);
    }

    public function updateOrganization(){
      $connection = mysqli_connect($this->hostname,
                                      $this->username,
                                      $this->password,
                                      $this->defaultdb);
      if(!$connection){
        $this->errorConnectingToDB();
      }
      $connection->set_charset("utf8");
      $id = $_POST["pid"];
      $name = $_POST["pname"];
      $description = $_POST["pdescription"];
      $type = $_POST["ptype"];

      $sql = "call sp_update_organization" . "('$name', '$description', $type, $id)";
      $result = mysqli_query($connection, $sql);

      echo json_encode($result);
      mysqli_close($connection);

    }
    public function deleteOrganization(){
      $connection = mysqli_connect($this->hostname,
                                      $this->username,
                                      $this->password,
                                      $this->defaultdb);
      if(!$connection){
        $this->errorConnectingToDB();
      }
      $connection->set_charset("utf8");
      $id = $_POST['pid'];
      $sql = "call sp_deactivate_organization" . "($id)";

      $result = mysqli_query($connection, $sql);

      echo json_encode($result);
      mysqli_close($connection);
    }
  }

  $org_info = new OrganizationsDBInterface();

  if($_POST["function"] == "registerOrganization"){
    $org_info->registerOrganization();
  }else if($_POST["function"] == "getOrganizationType"){
    $org_info->getOrganizationType();
  }else if($_POST["function"] == "getAllOrganizations"){
    $org_info->getAllOrganizations();
  }else if($_POST["function"] == "updateOrganization"){
    $org_info->updateOrganization();
  }else if($_POST["function"] == "getOrganizationByName"){
    $org_info->getOrganizationByName();
  }else if($_POST["function"] == "deleteOrganization"){
    $org_info->deleteOrganization();
  }
 ?>
