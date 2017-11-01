<?php
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
require_once "$root/php/template_handler/template_handler.php";

class TemplateHandlerContext {

  public $paramUsertype;
  public $templateHandler;

  public function __construct($paramUsertype){
    $this->paramUsertype = $paramUsertype;
    $this->setUsertypeState();
  }

  public function setUsertypeState(){
    if ($this->paramUsertype == 1){
      $this->templateHandler = new TemplateHandlerUsertypeAdmin();
    }
    if ($this->paramUsertype == 2){
      $this->templateHandler = new TemplateHandlerUsertypeAssistant();
    }
    elseif ($this->paramUsertype== 3) {
      $this->templateHandler = new TemplateHandlerUsertypeProfessor();
    }
    elseif ($this->paramUsertype==4) {
      $this->templateHandler = new TemplateHandlerUsertypeStudent();
    }
  }
}
?>
