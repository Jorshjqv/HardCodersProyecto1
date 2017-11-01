<?php 
	$root = realpath($_SERVER["DOCUMENT_ROOT"]);
	require_once "$root/php/db_interface/db_interface.php";


	class history_report extends DBInterface
	{

		function getAllAthelete()
		{

			 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  		 $link->set_charset("utf8");


    		$sql = "CALL  sp_get_all_Athlete";
   	  	    $result = $link->query($sql);
    
		  	 $resultJSON = array();
		  	 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON[]=$registro;
		      }
	          echo json_encode($resultJSON);
			
		}

		function get_all_info_athlete_on_event(){


			 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  		 $link->set_charset("utf8");


    		$sql = "CALL  sp_get_all_athletes_on_event";
   	  	    $result = $link->query($sql);
    
		  	 $resultJSON = array();
		  	 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON[]=$registro;
		      }
	          echo json_encode($resultJSON);


		}
		function get_all_events_per_Athlete(){

			 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  	   if (!$link){
	      			$this->errorConnectingToDB();
	   			 }

	   		$athlete_id = $_POST['id_atlhete'];	 
	   		$sql = "CALL sp_get_all_event_per_athlete('".$athlete_id."')";
	   		$result = $link->query($sql);
	   		$resultJSON = [];

	   		 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON[]=$registro;
		      }
	          echo json_encode($resultJSON);




		}

		function get_teacherId(){
	  			$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

			    $link->set_charset("utf8");
			     $paramUserID = $_POST['puserId'];
			     

			    $sql = "Call  sp_get_teacherId_by_UserId(".$paramUserID.")";

			    $result = $link->query($sql);

			  
				 $resultJSON = [];

		   		 while ($registro = mysqli_fetch_assoc($result)) {
			      $resultJSON=$registro;
			      }
		          echo json_encode($resultJSON);

	   		


		}
		function get_athletes_per_teacher(){

			 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  	   if (!$link){
	      			$this->errorConnectingToDB();
	   			 }

	   		$teacher_id = $_POST['id'];	 
	   		$sql = "CALL sp_get_all_students_by_teacherID('".$teacher_id."')";
	   		$result = $link->query($sql);
	   		
	   		 $resultJSON = array();
		  	 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON[]=$registro;
		      }
	          echo json_encode($resultJSON);




		}
		function get_all_info_athlete_in_all_events(){


				$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);

			    $link->set_charset("utf8");
			     $paramUserID = $_POST['pid'];
			     

			    $sql = "Call  sp_get_info_atlhlet_in_all_events(".$paramUserID.")";

			    $result = $link->query($sql);

			  
				 $resultJSON = [];

		   		 while ($registro = mysqli_fetch_assoc($result)) {
			    $resultJSON[]=$registro;
			      }
		          echo json_encode($resultJSON);



		}
		function get_average_points(){

			$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  

	   		$Athlete_id = $_POST['pid'];	 
	   		$sql = "CALL sp_get_average_points_per_Athlete_in_all_events('".$Athlete_id."')";
	   		$result = $link->query($sql);
	   		
	   		 $resultJSON = [];
		  	 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON[]=$registro;
		      }
	          echo json_encode($resultJSON);




		}
		function get_id_Athlete_by_userName(){

			 $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  	   if (!$link){
	      			$this->errorConnectingToDB();
	   			 }

	   		$puserName = $_POST['puserName'];	 
	   		$sql = "CALL sp_get_id_athlete_by_userName('".$puserName."')";
	   		$result = $link->query($sql);
	   		
	   		 $resultJSON = array();
		  	 while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON[]=$registro;
		      }
	          echo json_encode($resultJSON);



		}


		
	}// llave de clase
	$option_history_report = new history_report();

	if($_POST["function"] == "getAllAheletes"){
 		 $option_history_report->getAllAthelete();
		}	
		else if ($_POST["function"] == "getAllAthletesOnEvent") {
		$option_history_report->get_all_info_athlete_on_event();
	}
	else if ($_POST["function"] == "get_all_events_per_Athlete") {
		$option_history_report->get_all_events_per_Athlete();
	}
	else if ($_POST["function"] == "getStudentsByTeacherId") {
		$option_history_report->get_athletes_per_teacher();
	}
	else if ($_POST["function"] == "getTeacherID") {
		$option_history_report->get_teacherId();
	}
	else if ($_POST["function"] == "getAllInfoOfAthleteInAllEvents") {
		$option_history_report->get_all_info_athlete_in_all_events();
	}
	else if ($_POST["function"] == "averaPoints") {
		$option_history_report->get_average_points();
	}
	else if ($_POST["function"] == "getAthleteID") {
		$option_history_report->get_id_Athlete_by_userName();
	}



 ?>

 