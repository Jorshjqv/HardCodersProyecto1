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
                    <h2>Organizaciones afiliadas</h2>
                    <?php
                      $templateHandle->templateHandler->renderSearchBar();
                    ?>
                  </div>
                  <div id="alert">

                  </div>
                  <table id="tblOrganizaciones">
                <thead>
                 <tr>
                  <th>Organización</th>
                  <th>Tipo</th>
                  <th>Descripción</th>
                  <th>Cédula</th>
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
          <!-- The Modal -->
          <?php
            $templateHandle->templateHandler->renderModal();
           ?>
          <!--end modal-->
          <div class="clearfix"></div>
          <?php
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>

          <script  src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossorigin="anonymous"></script>
          <script src="../../js/util/modal.js"></script>
          <script src="../../js/organization/create_organization_logic_busi.js"></script>
          <script src="../../js/organization/report_organization_logic_interface.js"></script>
	</body>
</html>
