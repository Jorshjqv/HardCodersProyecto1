<?php 
	$root = realpath($_SERVER["DOCUMENT_ROOT"]);
	require_once "$root/php/db_interface/db_interface.php";

	class place_db_interface extends DBInterface{

public function register_place(){

		 $name_place =$_POST['name_place'];
		 $address =$_POST['address'];
		 $platitud =$_POST['platitud'];
		 $plongitud =$_POST['plongitud'];
		 $contact_name =$_POST['contact_name'];
	 	 $contac_personne_phone =$_POST['contac_personne_phone'];
	 	 $contact_persone_email =$_POST['contact_persone_email'];
	 	 $capacity =$_POST['capacity'];
	 	  $link = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
    			if (!$link){
     			 $this->errorConnectingToDB();
   			 }

			


			$sql = "CALL sp_insert_place('".$name_place."','"
											.$address."','"
											.$platitud."','"
											.$plongitud."','"
											.$contact_name."','"
											.$contac_personne_phone."','"
											.$contact_persone_email."','"
											.$capacity."')";


			 mysqli_query($link,$sql);
   			 mysqli_close($link);
			 
		}

function create_horary(){

 		$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
		 $link->set_charset("utf8");
		 if (!$link){
     			 $this->errorConnectingToDB();
   				 }

 		$monday  = $_POST['pmonday'];
 		$tuesday  = $_POST['ptuesday']; 
 		$wednesday  = $_POST['pwednesday'];
 		$thursday  = $_POST['pthursday'];
 		$friday  = $_POST['pfriday'];
 		$saturday  = $_POST['psaturday'];
 		$sunday  = $_POST['psunday'];
 		$begin_hour  = $_POST['pbegin_hour'];
 		$end_hour  = $_POST['pend_hour'];
 		$place_id  = $_POST['p_place_id'];

 	
    			

		$sql = "CALL sp_create_horary('".$monday."','"
									.$tuesday."','"
									.$wednesday."','"
									.$thursday."','"
									.$friday."','"
									.$saturday."','"
									.$sunday."','"
									.$begin_hour."','"
									.$end_hour."','"
									.$place_id."')";


	 	mysqli_query($link,$sql);
		 mysqli_close($link);



}


function get_all_places(){



       $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	   $link->set_charset("utf8");


    	$sql = "CALL  sp_list_places";
   	    $result = $link->query($sql);
    
	  	 $resultJSON = array();
	  	 while ($registro = mysqli_fetch_assoc($result)) {
	      $resultJSON[]=$registro;
	      }
          echo json_encode($resultJSON);
  }

function get_lastId_place(){

		  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  	   	
	   	  	   	if (!$link){
	      			$this->errorConnectingToDB();
	   			 }

   	  	   	$sql = "CALL sp_get_last_idPlace";
   	   	   $result = $link->query($sql);

   	   	   	 $resultJSON ;
		  	 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON=$registro;
		      }
	          echo json_encode($resultJSON);

}

function delete_place(){

		 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  	   if (!$link){
	      			$this->errorConnectingToDB();
	   			 }

	   		$place_id = $_POST['p_id_place'];	 
	   		$sql = "CALL sp_delete_place('".$place_id."')";
	   		$result = $link->query($sql);
	   		$resultJSON ;

	   		 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON=$registro;
		      }
	          echo json_encode($resultJSON);


}
function get_all_info_place(){

	 	   $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  	   if (!$link){
	      			$this->errorConnectingToDB();
	   			 }

	   		$placeid = $_POST['p_id_place'];	 
	   		$sql = "CALL sp_get_all_info_place('".$placeid."')";
	   		$result = $link->query($sql);
	   		$resultJSON ;

	   		 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON=$registro;
		      }
	          echo json_encode($resultJSON);



}
function update_info_place(){


		 $name_place =$_POST['name_place'];
		 $address =$_POST['address'];
		 $platitud =$_POST['platitud'];
		 $plongitud =$_POST['plongitud'];
		 $contact_name =$_POST['contact_name'];
	 	 $contac_personne_phone =$_POST['contact_person_phone'];
	 	 $contact_persone_email =$_POST['contact_person_email'];
	 	 $capacity =$_POST['capacity'];
	 	 $id =$_POST['p_id_place'];
	 	  $link = mysqli_connect($this->hostname, $this->username, $this->password, $this->defaultdb);
    			if (!$link){
     			 $this->errorConnectingToDB();
   			 }

			


			$sql = "CALL sp_modify_place('".$name_place."','"
											.$address."','"
											.$platitud."','"
											.$plongitud."','"
											.$contact_name."','"
											.$contac_personne_phone."','"
											.$contact_persone_email."','"
											.$capacity."','"
											.$id."')";


			 mysqli_query($link,$sql);
   			 mysqli_close($link);

}
function update_info_horary(){


 		$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
		 $link->set_charset("utf8");
		 if (!$link){
     			 $this->errorConnectingToDB();
   				 }
   		$place_id  = $_POST['p_place_id'];
 		$monday  = $_POST['pmonday'];
 		$tuesday  = $_POST['ptuesday']; 
 		$wednesday  = $_POST['pwednesday'];
 		$thursday  = $_POST['pthursday'];
 		$friday  = $_POST['pfriday'];
 		$saturday  = $_POST['psaturday'];
 		$sunday  = $_POST['psunday'];
 		$begin_hour  = $_POST['pbegin_hour'];
 		$end_hour  = $_POST['endHour'];
 		

 	
    			

		$sql = "CALL sp_modify_horary('".$place_id."','"
									.$monday."','"
									.$tuesday."','"
									.$wednesday."','"
									.$thursday."','"
									.$friday."','"
									.$saturday."','"
									.$sunday."','"
									.$begin_hour."','"
									.$end_hour."')";


	 	mysqli_query($link,$sql);
		 mysqli_close($link);


}


  }// llavve de la clase



	$place_interface = new place_db_interface();
	if($_POST["function"] == "register"){
 		 $place_interface->register_place();
		}	

	else if ($_POST["function"] == "get_all_places") {
		$place_interface->get_all_places();
	}
	else if ($_POST["function"] == "getLastId") {
		$place_interface->get_lastId_place();
	}
	else if ($_POST["function"] == "registerHorary") {
		$place_interface->create_horary();
	}
	else if ($_POST["function"] == "deletePlace") {
		$place_interface->delete_place();
	}
	else if ($_POST["function"] == "getAllPlaceInformation") {
		$place_interface->get_all_info_place();
	}
	else if ($_POST["function"] == "updatePlace") {
		$place_interface->update_info_place();
	}
	else if ($_POST["function"] == "updateHorary") {
		$place_interface->update_info_horary();
	}
	?>