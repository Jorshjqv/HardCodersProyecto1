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
           <?php
                  $templateHandle->templateHandler->renderModalChangePasswordFirstTime();
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
                 <h2>Eventos</h2>
                 <input type="text" id="searchBar" placeholder="Buscar evento">
               </div>

               <input type="button" value="Eventos pasados" class="btnEventListHeader" id="ListPastEvents">
               <input type="button" value="Eventos actuales" class="btnEventListHeader" id="ListCurrentEvents">
               <input type="button" value="Eventos futuros" class="btnEventListHeader" id="ListFutureEvents">
               <input type="button" value="Todos" class="btnEventListHeader" id="ListAllEvents" class="btnEventListHeader">
                 <table id="events">
                       <thead>
                         <tr>
                           <th>Nombre de evento</th>
                           <th>Fecha de inicio</th>
                           <th>Lugar</th>
                           <th>Tipo de vento</th>
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
          <script
            src="http://code.jquery.com/jquery-3.2.1.js"
            integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
            crossorigin="anonymous"></script>
          <!--<script src="../../js/util/load_user_menu.js"></script>-->
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
                   <script src="../../js/util/modal.js"></script>
          <script src="../../js/util/validation_module.js"></script>
          <script src="../../js/events/EventLogicBusinnes/EventBussinessLogic.js"></script>
          <script src="../../js/events/EventLogicInterface/EventListsLogicInterface.js"></script>
          <script src="../../js/users/change_password_first_time_bussiness_interface/change_password_fisrt_time_bussiness_interface.js"></script>
          <script src="../../js/users/change_password_logical_interface.js"></script>






  </body>
</html>
