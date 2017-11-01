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
                    <h2>Estudiantes</h2>
                    <?php
                      $templateHandle->templateHandler->renderSearchBar();
                    ?>
                  </div>
                     <?php
                    $templateHandle->templateHandler->renderToAlerts();
                     ?>
                    <table id="tableUsersList">
                      <thead>
                          <tr>
                              <th></th>
                              <th>Nombre</th>
                              <th>Correo</th>
                              <th>Edad</th>
                              <th>Academia</th>
                              <th>Cinta</th>
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
            $templateHandle->templateHandler->renderModal();
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script src="../../js/util/getImageById.js"></script>
          <script src="../../js/util/modal.js"></script>
          <script src="../../js/users/users_business_logic.js"></script>
          <script src="../../js/users/teacher/students_logic_interface_list.js"></script>
          <script src="../../js/util/searchUsers.js"></script>
        
  </body>
</html>
