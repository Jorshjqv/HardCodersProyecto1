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
                    <h2 id="placename"></h2>
                  </div>
                  <div id="alert" class="normal">

                  </div>
                  <form id="editFields">
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                <label for="placeName">Nombre del lugar</label>
                <input type="text" id="placeName" readonly></input>
                          </div>
                          <div class="group">
                <label for="address">Ubicación</label>
                <input type="text" id="address" readonly>
                          </div>
                          <div class="group">
                <label for="latitude">Latitud</label>
                <input type="text" id="latitude" readonly>
                          </div>
                          <div class="group">
                            <label for="longitude">Longitud</label>
              <input type="text" id="longitude" readonly>
                          </div>
               <div class="group">
                            <label for="person">Persona encargada</label>
              <input type="text" id="person" readonly>
                          </div>
                        </div>
                        <div class="column-right">

                          
                           <div class="group">
                <label for="phone">Número de teléfono</label>
                <input type="number" id="phone" readonly>
                          </div>
                           <div class="group">
                <label for="email">Correo electrónico</label>
                <input type="text" id="email" readonly>
                          </div>
                            <div class="group">
                <label for="capacity">Capacidad</label>
                <input type="number" id="capacity" readonly>
              
                           </div>
                          <div class="group">
                            <label for="openSchedule">Horario</label>
                            <div id="container_days">
                              <h5>L</h5>
                              <h5>K</h5>
                              <h5>M</h5>
                              <h5>J</h5>
                              <h5>V</h5>
                              <h5>S</h5>
                              <h5>D</h5>
                            </div>
                            <div id="schedule_container">
                           <input type="checkbox"  id="monday" onclick="return false;"   >
                          <input type="checkbox" id="tuesday" onclick="return false;" >
                          <input type="checkbox" id="wensday"   onclick="return false;">
                          <input type="checkbox" id="thursday"    onclick="return false;">
                          <input type="checkbox" id="friday"  onclick="return false;">
                           <input type="checkbox" id="saturday"   onclick="return false;">
                           <input type="checkbox" id="Sunday"    onclick="return false;">
                            </div> 
                          </div>
                                <div class="conteHours">
                                <div id="contStart">             
                                   <label >Hora de inicio</label>
                <input type="time" id="starthour"  readonly>
                </div>

                        <div id="contEndS">
                <label >Hora de finalización</label>
                <input type="time" id="endhour"  readonly>
                </div>
                           </div>
            
                        </div>
                    </div>
                    <div class="form-footer">
                  <input type="button" value="Regresar" class="btn btnImportant" id="backBtn">
                    </div>
                  </form>
               </div>
          </div>
          </div>
          <div class="clearfix"></div>
           <?php
          $templateHandle->templateHandler->renderAllUtilScripts();
          ?>

                <script src="../../js/places/places_busi_logic.js"></script>
                <script src="../../js/places/view_info_place_interface_logic.js"></script>
              
 

         
	</body>
</html>




     



