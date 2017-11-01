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
                  </div>
                  <form>
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                        </div>
                        <div class="column-right">
                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>

                            </select>
                          </div>
                           <div class="group">
                           <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                           <div class="group">
                           <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>

                            </select>
                          </div>
                        </div>
                    </div>
                    <div class="form-footer">
						<input type="button" value="CAMBIEME" class="btn btnImportant" id="createEvent">
                    </div>
                  </form>
               </div>
          </div>
          </div>
          <div class="clearfix"></div>
          <?php
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
	</body>
</html>
