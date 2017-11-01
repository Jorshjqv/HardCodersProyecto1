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
           <div id="alert" class="normal">

            </div>
            <div class="tabs">
              <ul class="tab-links">
                  <li class="active"><a href="#tab1">Crear Evento</a></li>
                  <li><a href="#tab2">Configurar Evento</a></li>
                  <li><a href="#tab3">Inscribir alumnos</a></li>
                  <li><a href="#tab4">Datos Previos Evento</a></li>
                  <li><a href="#tab5">Resultados Evento</a></li>
              </ul>

              <div class="tab-content">
                  <div id="tab1" class="tab active">
             <div class="form-header">
              <h2>Insertar Eventos</h2>
            </div>
              <form>
              <div class="form-body">
                  <div class="column-left">
                    <div class="group">
                      <label for="eventName">Nombre:</label>
                      <input type="text" name="" placeholder="Nombre del evento" id="eventName" requiered>
                    </div>
                    <div class="group">
                      <label for="dateBegin">Fecha de Inicio:</label>
                      <input type="date" name="date" id="dateBegin" requiered>
                    </div>
                    <div class="group">
                      <label for="dateEnd">Fecha de Fin:</label>
                      <input type="date" name="date" id="dateEnd" requiered>
                    </div>
                    <div class="group">
                      <label for="timeBegin">Hora de inicio:</label>
                      <input type="time" name="time" id="timeBegin" requiered>
                    </div>
                    <div class="group">
                      <label for="timeEnd">Hora final:</label>
                      <input type="time" name="time"  id="timeEnd" requiered>
                    </div>
                    <div class="group">
                      <label for="priceIns">Costo de inscripción:</label>
                      <input type="text" name="priceIns" placeholder="Costo" id="priceIns" requiered>
                    </div>
                  </div>
                  <div class="column-right">
                    <div class="group">
                      <label for="place">Lugar:</label>
                      <select name="places" id="place" requiered>

                      </select>
                    </div>
                     <div class="group">
                      <label for="available">Entradas a la venta:</label>
                      <input type="text" name="" placeholder="Entradas disponibles" id="available" requiered>
                    </div>
                    <div class="group">
                      <label for="priceEnter">Precio entrada</label>
                      <input type="text" name="" placeholder="Costo de ingreso" id="priceEnter" requiered>
                    </div>
                    <div class="group">
                      <label for="evetType">Tipo de evento:</label>
                      <select name="types" id="evetType" requiered>

                      </select>
                    </div>
                  </div>
              </div>
              <div class="form-footer">
                  <input type="button" value="Crear" class="btn btnImportant" id="createEvent">
              </div>
            </form>
                  </div>

                  <div id="tab2" class="tab">
                    <div class="forms" id="form">
                       <div class="form-header">
                         <h2>Asignar Eventos</h2>
                       </div>
                       <div id="alert" class="normal">

                       </div>
                       <form>
                         <div class="form-body">
                             <div class="column-left">
                               <div class="group">
                                 <label for="academies">Evento: </label>
                                 <input type="text" id="eventName" readonly>
                               </div>
                             </div>
                             <div class="column-right">
                               <div class="group">
                                 <label for="academies">Lugar: </label>
                                  <input type="text" id="place" readonly>
                               </div>
                             </div>
                         </div>
                         <div class="form-body">
                           <div class="group">
                               <label for="academies">Academias</label>
                               <select name="types" id="academies" class="select-size" requiered>

                               </select>
                                <input type="button" value="Agregar" class="addbtn" id="addAca">
                               <div id="selectedA" class="cotainar-selection">

                               </div>
                           </div>
                            <div class="group overflow">
                            <label for="category">Categorías</label>
                               <div class="min-float">
                               <div class="group">
                                 <label for="edad">Edad</label>
                                 <select name="types" id="edad" requiered>

                                 </select>
                               </div>
                             </div>
                             <div class="min-float">
                               <div class="group">
                                 <label for="peso">Peso:</label>
                                 <select name="types" id="peso" requiered>

                                 </select>
                             </div>
                             </div>
                             <p class="checkbox">Masculino <input  id="man" type="checkbox" name="masculino" value="Masculino">
                             Femenino <input id="woman" type="checkbox" name="Femenino" value="Femenino"></p>
                           </div>
                            <input type="button" value="Agregar" class="bothslect" id="addCate">
                            <div id="selectedCate" class="cotainar-selection min-margin">

                              </div>
                            <div class="group">
                               <label for="org">Organizaciones beneficiarias</label>
                               <select name="types" id="org" class="select-size" requiered>

                               </select>
                                <input type="button" value="Agregar" class="addbtn" id="addOrg">
                            <div id="selectedOrg" class="cotainar-selection">

                              </div>
                           </div>
                            <div class="group overflow">
                              <div class="min-float">
                               <div class="group">
                                 <select name="types" id="sponsor"  class="exten" requiered>

                                 </select>
                               </div>
                             </div>
                             <div class="min-float">
                               <div class="group">
                                  <select name="types" id="producto" requiered>
                                   <option value="">Productos</option>

                                 </select>
                             </div>
                             </div>
                             <div class="min-float">
                               <div class="group">
                                <input type="text" id="dinero" placeholder="Dinero">
                             </div>
                             </div>
                           </div>
                             <input type="button" value="Agregar" class="bothslect" id="addSpo">
                            <div id="selectedSpo" class="cotainar-selection min-margin">

                            </div>
                           <div id="exhibicion" class="exhibicion">
                             <p class="checkbox">Invitados Especiales <input  id="invite" type="checkbox" value="checked"></p>
                             <input type="text" class="invitado" placeholder="Correo" id="minOneMail">
                             <div id="newInput">

                             </div>
                              <input type="button" value="Agregar más" class="btn" id="add">
                           </div>
                         </div>
                         <div class="form-footer">
                             <input type="button" value="Crear" class="btn btnImportant" id="assingEvent">
                         </div>
                       </form>
                    </div>
                  </div>

                  <div id="tab3" class="tab">

                  </div>

                  <div id="tab4" class="tab">

                  </div>

                  <div id="tab5" class="tab">
                    <div class="forms" id="form">
                       <div class="form-header">
                         <h2>Ingresar resultados</h2>
                       </div>
                       <div id="alert" class="normal">

                       </div>
                       <div class="form-body" id="pointsInputsContainer">
                       </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
          </div>
          </div>
          <div class="clearfix"></div>
          <script
  src="http://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
          <!--<script src="../../js/util/load_user_menu.js"></script>-->
          <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
          <script src="../../js/events/EventLogicInterface/tabs.js"></script>
          <script src="../../js/util/validation_module.js"></script>
          <script src="../../js/events/EventLogicBusinnes/EventBussinessLogic.js"></script>
          <script src="../../js/events/EventLogicInterface/EventsLogicInterface.js"></script>


          <?php

            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
  </body>
</html>
