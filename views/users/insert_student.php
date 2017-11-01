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
                    <h2>Agregar estudiante</h2>
                  </div>
                    <?php
                    $templateHandle->templateHandler->renderToAlerts();
                  ?>
                    <form id="upload_img" enctype="multipart/form-data" name ="upload_img">
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                            <label for="numIdentificationUser">Identificación</label>
                            <input type="number" id="numIdentificationUser" class="general" required>
                          </div>
                          <div class="group">
                            <label for="txtNameUser">Nombre</label>
                            <input type="text" id="txtNameUser" class="general" required>
                          </div>
                          <div class="group">
                            <label for="txtSecondNameUser">Apellido</label>
                            <input type="text" id="txtSecondNameUser" class="general" required>
                          </div>
                          <div class="group">
                            <div class="radio-horizontal gender">
                                <label>Género</label>
                                <input value="Masculino" type="radio" name="genderUser" id="checkMaleUser" class="min-radio ">Masculino
                                <input value="Femenino" type="radio" name="genderUser" id="checkFemaleUser" class="min-radio ">Femenino
                            </div>
                          </div>
                          <div class="group">
                            <label for="numTelUser">Teléfono</label>
                            <input type=number id="numTelUser" class="general" required>
                          </div>
                           <div class="group" id="teacherSelect">
                             <label for="selectAcademyUser">Academia</label>
                             <select id="selectAcademyUser" class="teacher student">
                               
                             </select>
                           </div>
                          <div id="studentFormUserLeft">
                           <div class="group">
                              <label for="numHeightUser">Altura</label>
                              <input type="number" id="numHeightUser" class="student">
                            </div>
                            <div class="group">
                              <label for="categoryLevel">Categoría por cinturón</label>
                              <select id="categoryLevel" class="student">
                               
                             </select>
                            </div>
                            <div class="group">
                              <label for="categoryAge">Categoría por edad</label>
                              <input type="text" id="categoryAge" data-age="" class="student">          
                            </div>
                            <div class="group">
                              <label for="categoryWeight">Categoría por peso</label>
                              <input type="text" id="categoryWeight" class="student">          
                            </div>
                          </div>
                        </div>
                        <div class="column-right">
                          <div class="group">
                                <label>Tipo de Indetificación</label>
                                <div class="radio-horizontal">
                                  <input type="radio" id="checkIdUser" name="userIdentification" value="cédula" checked="checked" class="typeID" data-length="9"> Cédula
                                  <input type="radio" id="checkPassportUser" name="userIdentification" value="pasaporte" class="typeID" data-length="9"> Pasaporte
                                  <input type="radio" id="checkResidenceUser" name="userIdentification" value="residencia" class="typeID" data-length="12"> Residencia
                                </div>
                          </div>
                           <div class="group">
                             <label for="txtEmailUser">Correo electrónico</label>
                             <input type="email" id="txtEmailUser" class="visibility general" name="email" required>
                          </div>
                           <div class="group">
                             <label for="dateBirthUser">Fecha de nacimiento</label>
                             <input type="date" id="dateBirthUser" class="visibility general" required>
                          </div>
                          <div class="group">
                            <label for="selectTypeUser">Tipo de usuario</label>
                            <select id="selectTypeUser" class="visibility general" required>
                            </select>
                          </div>
                          <div class="group">
                             <label for="imageUser">Foto</label>
                             <input type="file" id="imageUser" accept="image/*" class="visibility" name="file">
                            </div>
                         <div id="studentFormUserRight">
                         <div class="group" id="teacherSelect">
                             <label for="selectTeacherUser">Profesor</label>
                             <select id="selectTeacherUser" class="student">
                               
                             </select>
                           </div>
                          <div class="group">
                              <label for="WeightUser">Peso</label>
                              <input type="number" id="WeightUser" class="student">
                          </div>
                         <div class="group">
                             <label for="numExhibitionsUser">Exhibiciones Participadas</label>
                             <input type="number" id="numExhibitionsUser" class="student">
                           </div>
                           <div class="group">
                             <label for="numTournamentWonUser">Torneos Ganados</label>
                            <input type="number" id="numTournamentWonUser" class="student">
                           </div>
                           <div class="group">
                             <label for="numTournamentParticipatedUser">Torneos Participados</label>
                            <input type="number" id="numTournamentParticipatedUser" class="student">
                           </div>
                         </div>
                        </div>
                    </div>
                    <div class="form-footer">
                        <input type="button" value="Agregar" class="btn btnImportant" id="buttonSaveUser" data-userType= "">
                    </div>
                  </form>
               </div>
          </div>
          </div>
          <div class="clearfix"></div>
          <?php
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script src="../../js/util/messages.js"></script>
          <script src="../../js/users/users_business_logic.js"></script>
          <script src="../../js/users/teacher/students_logic_interface_insert.js"></script>
  </body>
</html>
