<?php
  require_once "./db_interface.php";
  class sponsors_db_interface extends DBInterface{

  	public function addSponsors(){
      $link = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
          if (!$link){
           $this->errorConnectingToDB();
      }

      $social_r = $_POST['psocial'];
  	 	$name_company = $_POST['pname'];
  	 	$description = $_POST['pdescription'];
      $status = 1;

   		$sql = "CALL sp_insert_sponsor('".$social_r."','"
   										.$name_company."','"
   										.$description."','".$status."')";
   		$result = mysqli_query($link,$sql);

      echo json_encode($result);

      mysqli_close($link);

		}

    function deleteSponsors(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
      $link->set_charset("utf8");
       if (!$link){
             $this->errorConnectingToDB();
        }

      $id_sponsor =$_POST['id_sponsor'];

      $sql = "CALL sp_delete_sponsor('".$id_sponsor."')";
      $result = mysqli_query($link,$sql);
      echo json_encode($result);
      mysqli_close($link);

    }



	function getAllSponsors(){
	 	$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
	 	$link->set_charset("utf8");

	 	$sql = "CALL  sp_get_all_sponsors";
    //sp_get_all_sponsors
	 	$result = $link->query($sql);

	 	$resultJSON = array();
	  	while ($registro = mysqli_fetch_assoc($result)) {
	      $resultJSON[]=$registro;
	    }

    echo json_encode($resultJSON);

  }



    function updateSponsors(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
      $link->set_charset("utf8");
        if (!$link){
             $this->errorConnectingToDB();
        }
      $business_name =$_POST['business_name'];
      $name_company =$_POST['name_company'];
      $description =$_POST['description'];
      $id_sponsor =$_POST['id_sponsor'];

      $sql = "CALL sp_modify_sponsor('".$business_name."','".$name_company."','".$description."','".$id_sponsor."')";
      $result = mysqli_query($link,$sql);
      echo json_encode($result);
      mysqli_close($link);

    }

    function addProduct(){

      $link = new mysqli($this->hostname, $this->username, $this->password, $this->defaultdb);
      if (!$link){
          $this->errorConnectingToDB();
      }
      $link->set_charset('utf8');
      $id_sponsor = $_POST['id_sponsor'];
      $name = $_POST['name_product'];
      $description = $_POST['description'];
      $status = 1;



      $sql = "CALL sp_insert_product('".$name."','".$description."','".$id_sponsor."','".$status."')";
      $result = $link->query($sql);
      echo json_encode($result);
      mysqli_close($link);
    }

    function modifyProduct(){
      $link = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
        if (!$link){
           $this->errorConnectingToDB();
        }
      $name = $_POST['name_product'];
      $description = $_POST['description'];
      $id_producto = $_POST['id_product'];
      $sql = "CALL sp_modify_product('".$name."','".$description."','".$id_producto."')";
      $result = mysqli_query($link,$sql);
      echo json_encode($result);
      mysqli_close($link);

    }

    function getSponsorProducts(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
           $link->set_charset("utf8");
           if (!$link){
              $this->errorConnectingToDB();
           }

        $id_sponsor = $_POST['id_sponsor'];
        $sql = "CALL sp_get_sponsor_products('".$id_sponsor."')";

        $result = $link->query($sql);
        $resultJSON = array();

        while ($registro = mysqli_fetch_assoc($result)){
          $resultJSON[]=$registro;
        }
        echo json_encode($resultJSON);
    }

    function deleteProduct(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
      $link->set_charset("utf8");
       if (!$link){
             $this->errorConnectingToDB();
        }

      $id_product =$_POST['id_product'];
      $sql = "CALL sp_delete_product('".$id_product."')";
      $result = mysqli_query($link,$sql);
      echo json_encode($result);
      mysqli_close($link);

    }

    function getAllProducts(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
      $link->set_charset("utf8");
       if (!$link){
             $this->errorConnectingToDB();
        }
      $sql = "call sp_get_all_products";

      $result = mysqli_query($link, $sql);
      $rows = array();
      while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
      }
      echo json_encode($rows);
      mysqli_close($link);
    }
    function getSponsorTypeName(){
      $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

       if (!$link){
             $this->errorConnectingToDB();
        }
        $link->set_charset("utf8");
      $id = $_POST["id_sponsor_type"];
      $sql = "call sp_get_sponsortype_by_id"."($id)";

      $result = mysqli_query($link, $sql);

      echo json_encode($result);
      mysqli_close($link);
    }


}




$spons_intrface = new sponsors_db_interface();

if($_POST["function"] == "addSponsors")	{
  $spons_intrface -> addSponsors();
}else if($_POST["function"] == "getAllSponsors"){
  $spons_intrface -> getAllSponsors();
}else if($_POST["function"] == "deleteSponsor"){
  $spons_intrface -> deleteSponsors();
}else if($_POST["function"] == "insertProduct"){
  $spons_intrface -> addProduct();
}else if($_POST["function"] == "getSponsorProducts"){
  $spons_intrface -> getSponsorProducts();
}else if($_POST["function"] == "updateSponsors"){
  $spons_intrface -> updateSponsors();
}else if($_POST["function"] == "getAllProducts"){
  $spons_intrface -> getAllProducts();
}else if($_POST["function"] == "modifyProduct"){
  $spons_intrface -> modifyProduct();
}else if($_POST["function"] == "deleteProduct"){
  $spons_intrface -> deleteProduct();
}else if($_POST["function"] == "getSponsorTypeName"){
  $spons_intrface -> getSponsorTypeName();
}


 ?>
