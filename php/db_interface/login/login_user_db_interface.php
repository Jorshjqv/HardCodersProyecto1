<?php
	$root = realpath($_SERVER["DOCUMENT_ROOT"]);
	require_once "$root/php/db_interface/db_interface.php";

	class login_db_interface extends DBInterface
	{
		function get_login_info_user($user_name)
		{
		   	$link = new  mysqli( $this->hostname, $this->username, $this->password, $this->defaultdb);
   	  	$link->set_charset("utf8");
   	  	if (!$link){
	      	$this->errorConnectingToDB();
	   		}
	   		$sql = "CALL sp_get_user_mail_password_type_user('".$user_name."')";
	   		$result = $link->query($sql);
	   		$resultArray = array();
	   		while ($registro = $result->fetch_assoc()) {
		      $resultArray=$registro;
		    }
		
	     return $resultArray;
		}

		

	
	}// llave de la clase
	
	
 ?>
