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
                    <h2>Patrocinadores</h2>
                    <?php
                      $templateHandle->templateHandler->renderSearchBar();
                    ?>
                  </div>
                    <table id="sponsorTbl">
                    <thead>
                      <tr>
                        <th>Nombre de la compañía </th>
                        <th>Patrocinador</th>
                        <th>Descripcion</th>
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
          <script src="../../js/util/modal.js"></script>
       <script src="../../js/sponsors/logicaNegociosPatrocinador.js"></script>
          <script src="../../js/sponsors/list_sponsor_interface_logic.js"></script>
	</body>
</html>
