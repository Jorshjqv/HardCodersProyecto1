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
               <div class="forms" id="form">
                  <div class="form-header">
                    <h2>Modificando academia</h2>
                  </div>
                  <?php
                    $templateHandle->templateHandler->renderToAlerts();
                  ?>
                  <form>
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                              <label for="nombre">Nombre</label>
                              <input type="text" id="nombre" placeholder="Nombre de la academia" required>
                          </div>
                          <div class="group">
                            <label for="ubicacion">Ubicación</label>
                            <input type="text" id="ubicacion" placeholder="Dirección de la academia" required>
                          </div>
                          <div class="group">
                           <label for="telefono">Teléfono</label>
                           <input type="number" id="telefono" placeholder="Teléfono de la academia" required>
                          </div>
                        </div>
                        <div class="column-right">
                          <div class="group">
                             <label for="perscontact">Persona de contacto</label>
                            <input type="text" id="perscontact" placeholder="Nombre del contacto" required>
                          </div>
                           <div class="group">
                              <label for="email">Email</label>
                              <input type="text" id="email" placeholder="ejemplo@gmail.com">
                          </div>
                        </div>
                    </div>
                    <div class="form-footer" id="editAcademy">
                        <input type="button" value="Guardar" id="editBtn" class="btn btnImportant">
                    </div>
                  </form>
               </div>
          </div>
          </div>
          <div class="clearfix"></div>
          <?php
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script src="../../js/academies/academies_busi_logic.js"></script>
          <script src="../../js/academies/academies_interface_logic.js"></script>
	</body>
</html>
