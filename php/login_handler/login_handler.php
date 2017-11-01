<?php

require_once 'login_template_context.php';
require_once '../../php/db_interface/login/login_user_db_interface.php';
$root = realpath($_SERVER["DOCUMENT_ROOT"]);


class LoginHandler{

  private $login_dbint;

  public function __construct(){
    $this->login_dbint = new login_db_interface();
  }

  public function checkIfUsernameExists($paramUsername){
    $user_login_info = $this->login_dbint->get_login_info_user($paramUsername);
    if (sizeof($user_login_info)==0 || $user_login_info == null ) {
        return false;
    }
    else{
      return true;
    }
  }

  public function login($paramUsername,$paramPassword){
    $user_login_info = $this->login_dbint->get_login_info_user($paramUsername);
    $resultBool = false;
    if ($this->checkIfUsernameExists($paramUsername)){
      if ($user_login_info['password']==$paramPassword){
        session_start();
        $_SESSION["loggedIn"] = true;
        $_SESSION["loggedInUserEmail"] = $paramUsername;

        $_SESSION["loggedInUserType"] = $user_login_info['UserType_id_user_type'];
        session_write_close();

        $resultBool = true;
      }

       header("Location: $root/views/event/eventsList.php");
    }


    return $resultBool;
}

  public function invokeTemplateHandler(){
    $handle = new TemplateHandlerContext($_SESSION["loggedInUserType"]);
    return $handle;
  }

  public function checkIfSessionExists(){
    session_start();


    if (!$_SESSION["loggedIn"]){
      header("Location:../../../../views/home/index.php");
      session_write_close();

      exit();
    }
  }

  public function destroySession(){

    session_start();
    if (session_destroy()) {
              // header("Location:../../../../views/home/index.php");
        header("Location: $root/views/home/index.php");
      session_write_close();
      exit();
    }
  }
}

$root = realpath($_SERVER["DOCUMENT_ROOT"]);
$option = new LoginHandler();
 // $option->login('admin@gmail.com','admin123');


if(isset($_POST["function"])){
  if($_POST["function"] == "login"){
    $option->login($_POST['puser_mail'],$_POST['pPassword']);

  }
  else if ($_POST["function"] == "login_out") {
    $option->destroySession();
  }


}

// if (!$_SESSION["loggedIn"]){

//   header("Location:../../../../views/home/index.php");

// }


?>
