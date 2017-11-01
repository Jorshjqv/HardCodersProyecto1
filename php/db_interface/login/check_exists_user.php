<?php

	$root = realpath($_SERVER["DOCUMENT_ROOT"]);
	require_once "$root/php/db_interface/db_interface.php";

		class check_login_user_interface extends DBInterface
	{

			function check_user_info(){

 			$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	   $link->set_charset("utf8");
   	  	   if (!$link){
	      			$this->errorConnectingToDB();
	   			 }

	   		$p_username = $_POST['p_username'];
	   		$p_password = $_POST['p_password'];

	   		$sql = "CALL 	sp_check_user_login_info('".$p_username."','"
	   													.$p_password."')";
	   		$result = $link->query($sql);
	   		$resultJSON ;
				while ($registro = mysqli_fetch_assoc($result)) {
		      $resultJSON=$registro;
		    }
				echo json_encode($resultJSON);
		}

		function check_mail(){
			  $link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
		    $link->set_charset("utf8");
		    $paramUseMail = $_POST['mail'];
		    $sql = "Call  sp_check_mail_and_get_full_name('".$paramUseMail."')";
		    $result = $link->query($sql);
		   	$resultJSON = array();
		   	while ($registro = mysqli_fetch_assoc($result)) {
		    	$resultJSON[]=$registro;
		  	}
		    echo json_encode($resultJSON);
		}

		

		function change_password(){

			
			$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
			$link->set_charset("utf8");
			$paramUseMail = $_POST['mail'];
		    $paramPassword = $_POST['password'];
		    $is_fisrt_login = $_POST['is_fisrt_login'];
		    $sql = "Call  sp_change_password('".$paramUseMail."','"
		    								.$paramPassword."','"
		    								.$is_fisrt_login."')";
		  $result = $link->query($sql);
		 

		  clearstatcache();


		}


		
	}//llave de la clase.

	$option_login_user = new check_login_user_interface();
	if($_POST["function"] == "checkUser"){

 		 $option_login_user->check_user_info();
		}
		else if ($_POST["function"] == "checkMail") {
		$option_login_user->check_mail();
	   }
	  	else if ($_POST["function"] == "change_password") {
		$option_login_user->change_password();
	}









 ?>
