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
                    <h2>Perfil de usuario</h2>

                  </div>
                  <div id="alert" class="normal">

                  </div>
                  <form id="upload_img" enctype="multipart/form-data" name ="upload_img">
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                            <label for="userID">Identificación</label>
                            <input type="text" id="userID" required>
                          </div>
                          <div class="group">
                            <label for="txtUserName">Nombre</label>
                            <input type="text" id="txtUserName" required>
                          </div>
                          <div class="group">
                            <label for="txtLastName">Apellidos</label>
                            <input type="text" id="txtLastName" required>
                          </div>
                          <div class="group">
                            <label for="birthDate">Fecha de nacimiento</label>
                            <input type="date" id="birthDate"  required>
                          </div>
                          <div class="group">
                            <label for="txtAge">Edad</label>
                            <input type="text" id="txtAge">
                        </div>
                        </div>
                        <div class="column-right" id="right">
                          <div class="group" id="space_modify_photo">
                            <label for="imageUser" id="btnModify" class="btn btnImportant">Modificar foto</label>
                            <input type="file" id="imageUser" class="inputImgHdn" name="file">
                          </div>
                          <div class="clearfix">

                          </div>
                          <div class="group">
                            <label for="txtPhone">Teléfono</label>
                            <input type="text" id="txtPhone">
                          </div>
                          <div class="group">
                            <label for="txtEmailUser">Correo electrónico</label>
                            <input type="text" id="txtEmailUser" required>
                          </div>

                           <div class="group">
                           <label for="txtGender">Género</label>
                           <input type="text" id="txtGender" required>
                          </div>
                          <div class="group" id="space_modify_password">
                            <label for="pwdChange">Cambiar contraseña</label>
                            <input type="button" id="imageUser" class="btn btnImportant" onclick="changePwd();" value="Nueva contraseña">
                          </div>
                          <div class="clearfix">

                          </div>
                        </div>
                    </div>
                    <div id="footerbtmn" class="form-footer">
                      <input type="button" value="Modificar" class="btn btnImportant" id="btnModProfile" onclick="modSaveProfileInfo();">
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
          <script src="../../js/users/users_business_logic.js"></script>
          <script src="../../js/profile/logicaNegociosPerfil.js"></script>
          <script src="../../js/profile/logicaInterfazPerfil.js"></script>
	</body>
</html>
