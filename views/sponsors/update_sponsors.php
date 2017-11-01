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
                    <h2>Modificar patrocinador</h2>

                     </div>
                  <div id="alert" class="normal">

                  </div>
                  <form id="upload_img" enctype="multipart/form-data" name ="upload_img">
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                             <label for="txtSocialReason">Razón Social</label>
                             <input type="text" id="txtSocialReason" required>
                           </div>

                          <div class="group">
                           <label for="txtDescription">Descripción</label>
                           <input type="text" id="txtDescription" required>
                         </div>

                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                        </div>

                        <div class="column-right">

                          <div class="group">
                            <label for="txtSponsorName">Nombre</label>
                            <input type="text" id="txtSponsorName" required>
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
                    </div>
                    <div class="form-footer">
                       <input type="button" value="Modificar" class="btn btnImportant" id="btnModSave" onclick="modSaveInfo();">
                    </div>
                  </form>
                        <div class="tbl-header">
                          <h3>Productos</h3>
                        </div>

                        <table id=tblModProducts>
                          <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>Descripción</th>
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
          </div>
          <div class="clearfix"></div>
          <?php
          $templateHandle->templateHandler->renderModal();
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script
        src="http://code.jquery.com/jquery-3.2.1.js"
        integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
        crossorigin="anonymous"></script>
        <script src="../../js/util/modal.js"></script>
        <script src="../../js/sponsors/logicaNegociosPatrocinador.js"></script>
        <script src="../../js/sponsors/logicaInterfazPatrocinador.js"></script>
	</body>
</html>
