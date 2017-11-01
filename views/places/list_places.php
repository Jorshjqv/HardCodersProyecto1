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
          <div id="allInfo">
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
                    <h2>Lugares</h2>
                    <?php
                      $templateHandle->templateHandler->renderSearchBar();
                    ?>
                  </div>
                   <table  id="tablePlaces">
                     <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Ubicación</th>
                          <th>Teléfono</th>
                          <th>Contacto</th>
                          <th>Correo</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                   </table>
               </div>
          </div>
          </div>
           <div class="clearfix"></div>
      
          
  
          
          <?php
          $templateHandle->templateHandler->renderAllUtilScripts();
          $templateHandle->templateHandler->renderModal();
          ?>

      <script src="../../js/util/modal.js"></script>
      <script src="../../js/places/places_busi_logic.js"></script>
      <script src="../../js/places/places_interface_logic.js"></script>
      <script src="../../js/places/list_places_logic_interface.js"></script>
               

  </body>
</html>



