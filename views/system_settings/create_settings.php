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
                    <h2>Parámetros del sistema</h2>
                  </div>
                  <div id="alert" class="normal">

                  </div>
                  <form id="upload_img" enctype="multipart/form-data" name ="upload_img">
                    <div class="form-body">
                        <div class="column-left">

                          <div class="group">
                           <label for="txtNombreAplicacion">Nombre de la aplicación</label>
          <input type="text" id="txtNombreAplicacion" class="mod" placeholder="Federacion Costarricense de Taekwondo" required></td> </div>
           <div class="group">
                            <input type="file" class="inputImgHdn" id="btnModificarLogo" value="Modificar logo" name="file">
                            <label for="btnModificarLogo" class="btn btnImportant">Modificar Logo</label>
          </div>
          <div class="clearfix">

          </div>
                          <div class="group">
                         <h3> Información del contacto</h3>
                            <ponga su label aqui>
          <ponga su input aqui>
                          </div>
                          <div class="group">
                            <label for="txtEmail">Correo electrónico</label>
          <input type="text" id="txtEmail" placeholder="nombre@mail.com" class="mod" required>
                          </div>


                          <div class="group">
                           <label for="txtPhone">Teléfono de contacto</label>
          <input type="text" id="txtPhone" required placeholder="88991122" class="mod" >
                          </div>
                        </div>



                        <div class="column-right">
                          <div class="group">

                          <label for="txtLatitud">Latitud</label>
          <input type="number" id="txtLatitud" class="mod" required >

                          </div>
                           <div class="group">
                           <label for="txtLongitud">Longitud</label>
          <input type="number" id="txtLongitud" class="mod" required>
                          </div>

                           <div class="group">
                         <label for="txtDireccion">Dirección</label>
          <textarea rows="4" cols="50" id="txtDireccion" placeholder="Introduzca dirección" required="true" class="mod"></textarea>
                          </div>


                          <div class="group">
                            <ponga su label aqui>
          <ponga su input aqui>


                          </div>
                        </div>
                    </div>
                    <div class="form-footer">

                    <input type="button" id="btnEditar" class="btn btnImportant" value="Modificar">



                    </div>
                  </form>
               </div>
          </div>
          </div>
          <div class="clearfix"></div>
          <?php
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script  src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossorigin="anonymous"></script>

          <script src="../../js/util/messages.js"></script>
          <script src="../../js/system_settings/create_settings_logic_busi.js"></script>
  <script src="../../js/system_settings/create_settings_logic_interface.js"></script>
	</body>
</html>
