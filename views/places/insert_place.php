
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
                    <h2>Agregar lugar</h2>
                  </div>
                  <div id="alert" class="normal">

                  </div>
                  <form>
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                <label for="placeName">Nombre del lugar</label>
                <input type="text" id="placeName" placeholder="Nombre del lugar" required></input>
                          </div>
                          <div class="group">
                <label for="address">Ubicación</label>
                <input type="text" id="address"  placeholder="Ubicación del lugar">
                          </div>
                          <div class="group">
                <label for="latitude">Latitud</label>
                <input type="number" id="latitude" min="0" max="11"  placeholder="Grados Latitud">
                          </div>
                 <div class="group">
              <label for="longitude">Longitud</label>
              <input type="number" id="longitude" min="0" max="11"  placeholder="Grados Longitud">
                          </div>
               <div class="group">
                            <label for="person">Persona encargada</label>
              <input type="text" id="person"  placeholder="Nombre del encargado">
                          </div>
                        </div>
                        <div class="column-right">

                           <div class="group">
                <label for="phone">Número de teléfono</label>
                <input type="number" id="phone"  placeholder="Teléfono del lugar">
                          </div>
                           <div class="group">
                <label for="email">Correo electrónico</label>
                <input type="text" id="email"  placeholder="ejemplo@gmail.com">
                          </div>
                            <div class="group">
                <label for="capacity">Capacidad</label>
                <input type="number" id="capacity"  placeholder="Cantidad de espacio">
              
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
                           <input type="checkbox"  id="monday"   >
                          <input type="checkbox" id="tuesday"  >
                          <input type="checkbox" id="wensday"   >
                          <input type="checkbox" id="thursday"   >
                          <input type="checkbox" id="friday"  >
                           <input type="checkbox" id="saturday"  >
                           <input type="checkbox" id="Sunday"   >
                            </div> 
                          </div>
                                <div class="conteHours">
                                <div id="contStart">             
                                   <label >Hora de inicio</label>
                <input type="time" id="starthour" min="07:00:00" max="23:00:00">
                </div>

                        <div id="contEndS">
                <label >Hora de finalización</label>
                <input type="time" id="endhour" >
                </div>
                           </div>
            
                        </div>
                    </div>
                    <div class="form-footer">
                  <input type="button" value="Agregar" class="btn btnImportant" id="addBtn">
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
          <script src="../../js/places/places_interface_logic.js"></script>

        


  </body>
</html>



