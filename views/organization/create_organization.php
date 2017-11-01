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
          <h2>Crear organización</h2>

        </div>
        <div id="alert">

        </div>
        <form>
          <div class="form-body">
            <div class="column-left">
              <div class="group">

                <label for="txtNombre">Nombre</label>
                <input type="text" id="txtNombre" placeholder="Introduzca nombre de la organización" required>
              </div>

              <div class="group">

                <label for="txtTipo">Tipo</label>
                <SELECT  type="text" id="txtType" placeholder="Seleccione el tipo de organización">

                </SELECT>
              </div>
            </div>
            <div class="column-right">
              <div class="group">
                <label for="txtCedJuridica">Cédula jurídica</label>
                <input type="text" id="txtCedJuridica" class="number" placeholder="Digite cédula jurídica">
              </div>

              <div class="group">
                <label for="txtDescripcion">Descripción</label>
                <textarea rows="4" cols="50" id="txtDescripcion" placeholder="Breve descripción" required></textarea>
              </div>

            </div>
          </div>
          <div class="form-footer">
            <input type="button" id="btnRegistrarOrganizacion" value="Agregar"
            class="btn btnImportant">


          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>
  <?php
  $templateHandle->templateHandler->renderAllUtilScripts();
  ?>
  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script src="../../js/organization/create_organization_logic_busi.js"></script>
  <script src="../../js/organization/create_organization_logic_interface.js"></script>
</body>
</body>
</html>
