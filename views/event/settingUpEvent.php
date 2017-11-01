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
                  <div class="tabs">
                    <ul class="tab-links">
                        <li class="active"><a href="#tab1" id="t1">Crear Evento</a></li>
                        <li><a href="#tab2" id="t2">Configurar Evento</a></li>
                        <li><a href="#tab3" id="t3">Inscribir Estudiante</a></li>
                        <li><a href="#tab4" id="t4">Datos Previos Evento</a></li>
                        <li><a href="#tab5" id="t5">Resultados Evento</a></li>
                    </ul>
                 
                    <div class="tab-content">
                      <?php
                        $templateHandle->templateHandler->renderToAlerts();
                      ?>
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
                                      <label for="dateBegin">Fecha de inicio:</label>
                                      <input type="date" name="date" id="dateBegin" requiered>  
                                    </div>
                                    <div class="group">
                                      <label for="dateEnd">Fecha de fin:</label>
                                      <input type="date" name="date" id="dateEnd" requiered>  
                                    </div>
                                    <div class="group">
                                      <label for="priceIns">Costo de inscripción:</label>
                                      <input type="number" name="priceIns" placeholder="Costo" id="priceIns" requiered>  
                                    </div>
                                    <div class="group">
                                      <label for="timeBegin">Hora de inicio:</label>
                                      <input type="time" name="time" id="timeBegin" requiered>
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
                                      <input type="number" name="" placeholder="Entradas disponibles" id="available" requiered>  
                                    </div>
                                     <div class="group">
                                      <label for="priceEnter">Precio entrada</label>
                                      <input type="number" name="" placeholder="Costo de ingreso" id="priceEnter" requiered>  
                                    </div>
                                    <div class="group">
                                      <label for="evetType">Tipo de evento:</label>
                                      <select name="types" id="evetType" requiered>

                                      </select>                         
                                    </div> 
                                    <div class="group">
                                      <label for="timeEnd">Hora final:</label>
                                      <input type="time" name="time"  id="timeEnd" requiered>
                                    </div>                        
                                  </div>
                              </div>
                              <div class="form-footer">
                                  <input type="button" value="Crear" class="btn btnImportant" id="createEvent">
                              </div>
                            </form>
                            </div>                 
                        <div id="tab2" class="tab">
                           <div class="form-header">
                              <h2>Configurar Evento</h2>
                            </div>
                              <form>
                              <div class="form-content">
                                <div class="form-config">
                                  <h3>Seleccione las academias</h3>
                                </div>
                              <div class="container">
                                <div class="select-left">
                                <p>Academias</p>
                                    <select name="from[]" class="js-multiselect form-control" size="8" multiple="multiple" id="academy">
                                       
                                    </select>
                                </div>
                                <div class="select-center">
                                    <button type="button" id="js_right_Selected_1000" class="btn btnAdd">Agregar</button>
                                    <button type="button" id="js_left_Selected_1000" class="btn btnAdd">Eliminar</button>
                                </div>
                                <div class="select-right">
                                <p>Academias seleccionadas</p>
                                   <select name="to[]" id="js_multiselect_to_1000" class="form-control" size="8" multiple="multiple"></select>
                                </div>
                            </div>
                            <div class="form-config">
                                  <h3>Seleccione las organizaciones</h3>
                                </div>
                              <div class="container">
                                <div class="select-left">
                                <p>Organizaciones</p>
                                    <select name="from[]" class="js-multiselect_400" size="8" multiple="multiple" id="orgs">
                                       
                                    </select>
                                </div>
                                <div class="select-center">
                                    <button type="button" id="js_right_Selected_400" class="btn btnAdd">Agregar</button>
                                    <button type="button" id="js_left_Selected_400" class="btn btnAdd">Eliminar</button>
                                </div>
                                <div class="select-right">
                                <p>Organizaciones seleccionadas</p>
                                   <select name="to[]" id="js_multiselect_to_400" class="form-control" size="8" multiple="multiple"></select>
                                </div>
                            </div>
                                <div class="form-config">
                                  <h3>Seleccione las categorías</h3>
                                </div>
                             <div class="container">
                                <div class="select-left">
                                <p>Categorías</p>
                                    <select name="from[]" class="js-multiselect_100 form-control" size="8" multiple="multiple" id="category">
                                       
                                    </select>
                                </div>
                                <div class="select-center">
                                    <button type="button" id="js_right_Selected_100" class="btn btnAdd">Agregar</button>
                                    <button type="button" id="js_left_Selected_100" class="btn btnAdd">Eliminar</button>
                                </div>
                                <div class="select-right">
                                <p>Categorías seleccionadas</p>
                                   <select name="to[]" id="js_multiselect_to_100" class="form-control" size="8" multiple="multiple"></select>
                                </div>
                            </div>
                             <div class="form-config">
                                  <h3>Seleccione los patrocinadores</h3>
                            </div>
                            <div class="container">
                                <div class="select-left">
                                <p>Patrocinadores</p>
                                    <select name="from[]" class="js-multiselect_200 form-control" size="8" multiple="multiple" id="sponsor">
                                       
                                    </select>
                                </div>
                                <div class="select-center">
                                    <button type="button" id="js_right_Selected_200" class="btn btnAdd">Agregar</button>
                                    <button type="button" id="js_left_Selected_200" class="btn btnAdd">Eliminar</button>
                                </div>
                                <div class="select-right">
                                <p>Patrocinadores seleccionados</p>
                                   <select name="to[]" id="js_multiselect_to_200" class="form-control" size="8" multiple="multiple"></select>
                                </div>
                            </div>
                            <div class="form-config">
                                  <h3>Seleccione los productos</h3>
                            </div>
                            <div class="container">
                                <div class="select-left">
                                <p>Productos</p>
                                    <select name="from[]" class="js-multiselect_300 form-control" size="8" multiple="multiple" id="product">
                                       
                                    </select>
                                </div>
                                <div class="select-center">
                                    <button type="button" id="js_right_Selected_300" class="btn btnAdd">Agregar</button>
                                    <button type="button" id="js_left_Selected_300" class="btn btnAdd">Eliminar</button>
                                </div>
                                <div class="select-right">
                                <p>Productos seleccionados</p>
                                   <select name="to[]" id="js_multiselect_to_300" class="form-control" size="8" multiple="multiple"></select>
                                </div>
                            </div>
                            </div>
                             <div class="form-footer">
                                  <input type="button" value="Guardar" class="btn btnImportant" id="SaveConfig">
                              </div>
                            </form>
                        </div>
                        <div id="tab3" class="tab">
                           <div class="form-header">
                              <h2>Inscribir Estudiante</h2>
                            </div>

                              <form>
                              <div class="form-body">
                                  <div class="column-expand " id='containerCategory'>
 
                                  </div>
                              </div>
                              <div class="form-footer">
                                  <input type="button" value="Guardar" class="btn btnImportant" id="SaveInscription">
                              </div>
                            </form>
                              <div class="radio-horizontal">
                                
                              </div>
                        </div>                 
                        <div id="tab4" class="tab">
                            <div class="form-header">
                              <h2>Ceremonia de pesaje</h2>
                            </div>
                              <form>
                              <div class="form-body">
                                  <div class="column-expand centerCer" id='containerCeremony'>
 
                                  </div>
                              </div>
                              <div class="form-footer">
                                  <input type="button" value="Guardar" class="btn btnImportant" id="SaveWeight">
                              </div>
                            </form>
                           <div class="radio-horizontal">
                            </div>
                        </div>
                       <div id="tab5" class="tab">
                          <div class="form-header">
                              <h2>Resultados del evento</h2>
                            </div>
                              <form>
                              <div class="form-body">
                                  <div class="column-expand centerCer" id='containerResults'>
 
                                  </div>
                              </div>
                              <div class="form-footer">
                                  <input type="button" value="Guardar" class="btn btnImportant" id="SaveResult">
                              </div>
                            </form>
                           <div class="radio-horizontal">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
          <div class="clearfix"></div>
          <!-- The Modal -->
          <div id="sellEvent" class="modal">
               <div class="modal-content">
                    <div id="VariableContent">
                    <div class="modal-header">
                         <h1>Confirmación</h1>
                         <span class="close">&times;</span>
                    </div>
                    <div class="contet" id="ko">
                         
                    </div>
                    </div>
                    <div class="modal-footer">
                    <input type="button" value = "Aceptar" id="btnOK" class="btn btnImportant btnOnDelete">
                    <input type="button" value = "Cancelar" id="btnCancelar" class="btn btnClose btnOnDelete">
               </div>
               </div>
          </div>
          <?php
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script src="../../js/util/helper.js"></script>
          <script src="../../js/events/EventLogicInterface/tabs.js"></script>
          <script src="../../js/util/multipleSelect.js"></script>
          <script src="../../js/util/modal.js"></script>
          <script src="../../js/events/EventLogicBusinnes/EventBussinessLogic.js"></script>
          <script src="../../js/events/EventLogicInterface/resultsByStudent.js"></script>
          <script src="../../js/events/EventLogicInterface/weightCeremony.js"></script>
          <script src="../../js/events/EventLogicInterface/studentInscription.js"></script>
          <script src="../../js/events/EventLogicInterface/configEvent.js"></script>
          <script src="../../js/events/EventLogicInterface/createEvent.js"></script>
    </body>
</html>
