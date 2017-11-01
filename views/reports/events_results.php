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
          <table id="eventsList">
          </table>
          <div class="forms">
             <div class="form-header">
               <h2 id="eventName"></h2>
               <h3 id="eventtDate"></h3>
             </div>
            <div id="generalCategoriesContainer" class="event_report_container">

            </div>

           </div>

           <div class="report-footer">
           </div>
        </div>
        </div>
        <div class="clearfix"></div>
          <?php
            $templateHandle->templateHandler->renderModal();
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script src="../../js/reports/event_results_busi_logic.js"></script>
          <script src="../../js/reports/event_results_interface_logic.js"></script>

	</body>
</html>
