<!DOCTYPE html>
<html>
     <head>
    <?php
          $root = realpath($_SERVER["DOCUMENT_ROOT"]);
          require_once "$root/php/login_handler/login_handler.php";
          $loginctrl = new LoginHandler();
          $loginctrl->CheckIfSessionExists();
          $templateHandle = $loginctrl->invokeTemplateHandler();
        ?>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Federación Costarricense de Taekwondo</title>
        <?php
         $templateHandle->templateHandler->renderTemplateCSS();
        ?>
         
     </head>
     <body>
          <!-- Navigation Section -->
           <?php

            $templateHandle->templateHandler->renderTopnavBar();
          ?>
            <div class="navigation">
              <ul class="mainmenu">
                  <?php
                    $templateHandle->templateHandler->renderSideNavBar();
                  ?>
              </ul>
          </div>
        
          <div class="content-info">
               <div class="forms">
                  <div class="form-header">
                    <h2 id="titulo_Principal"></h2>
                  </div>
                  <div id="generalContainer">
                  </div>
                  
               </div>
               <div class="form-footer">
             
                    <input type="button" value="Regresar" class="btn btnImportant" id="backBtn">
                   

                    
                  </div >

          </div>
          </div>
          <div class="clearfix"></div>
           <?php

            $templateHandle->templateHandler->renderAllUtilScripts();
            
          ?>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.bundle.min.js"></script>
          <script src="../../js/reports/athlete_history_busi_logic.js"></script>
          <script src="../../js/reports/athlete_history_interface_logic.js"></script>
	</body>
</html>

