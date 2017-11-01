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
                    <h2>Reporte de estadísticas del evento</h2>

                  </div>
                  <form>
                    <div class="" id="statisticsReport">
                      <div class="report-header" id="reportHead">
                        <h2 id="title"></h2>
                        <h3 id="eventDate"></h3>
                      </div>
                      <div class="report-body">
                        <div class="report-statistics">
                          <div class="participants">
                            <label for="txtParticipantsAmount">Cantidad de participantes</label>
                            <p id="txtParticipantsAmount"></p>
                          </div>
                          <div class="place">
                            <label for="txtEventsPlace">Lugar del evento</label>
                            <p id="txtEventsPlace"></p>
                          </div>
                        </div>
                        <div class="midle-line-container">
                          <div class="midle-line">

                          </div>
                        </div>
                        <div class="clearfix">

                        </div>

                      <div class="report-footer">
                        <div class="report-button" id="btnsContainer">
                          <input type="button" id="btnResultsReport" value="Reporte de resultados" class="btn btnImportant">
                          <input type="button" id="btnEarningsReport" value="Reporte de ganancias" class="btn btnImportant">
                        </div>
                      </div>
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
          <script src="../../js/reports/statistics_report_business_logic.js"></script>
          <script src="../../js/reports/statistics_report_presentation_logic.js"></script>
	</body>
</html>
