<?php
class TemplateHandler  {
  public function renderTemplateCSS(){?>
    <link rel="icon" href="../../images/landingPageImg/ftcIcon.png">
     <link rel="stylesheet" href="../../css/general/reset.css">
    <link rel="stylesheet" href="../../css/font/font.css">
    <link rel="stylesheet" href="../../css/font/icons.css">
    <link rel="stylesheet" href="../../css/general/menus.css">
    <link rel="stylesheet" href="../../css/general/general.css">
    <link rel="stylesheet" href="../../css/general/forms.css">
    <link rel="stylesheet" href="../../css/general/tables.css">
    <link rel="stylesheet" href="../../css/general/alerts.css">
    <link rel="stylesheet" href="../../css/general/navbar.css">
    <link rel="stylesheet" href="../../css/general/alignment.css">
    <link rel="stylesheet" href="../../css/events/tabs.css">
    <link rel="stylesheet" href="../../css/general/modal.css">
    <link rel="stylesheet" href="../../css/reports/statistics_report.css">
    <link rel="stylesheet" href="../../css/reports/reporte_ganancias.css">
  <?php }

  public function renderSearchBar() {?>
    <input type="text" id="searchBar" placeholder="Buscar">
  <?php }

  public function renderAllUtilScripts(){?>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin="anonymous"></script>
   <script src="../../js/util/getImageById.js"></script>
    <script src="../../js/util/leftSideMenu.js"></script>
    <script src="../../js/util/messages.js"></script>
    <script src="../../js/util/search.js"></script>
    <script src="../../js/util/button_factory.js"></script>
    <script src="../../js/util/validation_module.js"></script>
    <script src="../../js/util/load_user_menu.js"></script>
    <script src="../../js/util/get_url_parameters.js"></script>
    <script src="../../js/util/download_csv.js"></script>
  <?php }

  public function renderTopnavBar(){ ?>
    <header class="navbar custom-navbar">
         <nav class="container fixedpos">
             <!-- navbar header -->
              <div id="navbar-title" class="navbar-header navSize">
                   <div class="imgLogo logo-style" id="logoFTC"></div>
                   <div class="alingNav">
                   <strong><h3 class="color-white">Federación Costarricense de Taekwondo</h3></strong>
                   </div>
              </div>
              <div>
              <div class="containerUserImage">
                <div class="userImg"  id="userPhoto">
                   </div>
              </div>

                   <ul class="nav navbar-nav navbar-right " id="btnNav">
                        <div class="username">
                             <li><a href="#">Nombre del Ususario</a></li>
                        </div>
                   </ul>
              </div>
         </nav>
      </header>

  <?php }
  public function renderToAlerts(){ ?>
  <div id="alertContainer">
      <div id="alert" class="normal">

     </div>
  </div>
  <?php }

  public function renderModal (){ ?>
           <!-- The Modal -->
          <div id="sellEvent" class="modal">
               <div class="modal-content">
                    <div id="VariableContent">
                    <div class="modal-header">
                         <h1>Confirmación</h1>
                         <span class="close">&times;</span>
                    </div>
                    <div class="contet">
                         <p>¿Seguro que desea eliminar este elemento?</p>
                    </div>
                    </div>
                    <div class="modal-footer">
                    <input type="button" value = "Aceptar" id="btnOK" class="btn btnImportant btnOnDelete">
                    <input type="button" value = "Cancelar" id="btnCancelar" class="btn btnClose btnOnDelete">
               </div>
               </div>
          </div>
  <?php }


  public function renderModalChangePasswordFirstTime(){?>
   <div class="modal_conteiner" id="modal-cont">
   <input id="cerrar-modal" name="modal" type="button"/>
<label for="cerrar-modal"> X </label>
       <div class="window">
       <div class="content-info">

       </div>
        <div class="form-header">
       <h1>Cambiar contraseña</h1>
       </div>
        <h2  id="message_modal"></h2>
        <div id="alert" class="normal"></div>
       <div class="form">
       <form>
       <div class="form-body">

       <div class="group">
        <label>Contraseña nueva</label>
        <input type="password" placeholder="contraseña" id="contrasena1" onkeypress="return checkBlankSpaces()">
        </div>
        <div class="group">
        <label>Repetir contraseña </label>
         <input type="password" placeholder="contraseña" id="contrasena2" onkeypress="return checkBlankSpaces()">
          </div>

            </div>
              <div class="form-footer">
          <input type="button" value="Cancelar" id="cancel" class="btn btnImportant">
          <input type="button" value="Guardar cambios" id="saveFirstTime" class="btn btnImportant">


            </div>

       </form>

       </div>

       </div>
     </div>


  <?php }
  public function renderSideNavBar(){
    //implement in children
  }
}

class TemplateHandlerUsertypeAdmin extends TemplateHandler{
  public function renderSideNavBar(){ ?>
    <div id="admin">
       <li><a href="#">Usuarios</a>
           <ul class="submenu">
                 <li><a href="../users/insert_user.php"> Crear usuarios</a></li>
                 <li><a href="../users/list_users.php">Ver usuarios</a></li>
           </ul>
       </li>
       <li><a href="#">   Eventos</a>
           <ul class="submenu">
                 <li><a href="../event/settingUpEvent.php">Crear eventos</a></li>
                 <li><a href="../event/event_list.php">Ver eventos</a></li>
           </ul>
       </li>
       <li><a href="#">   Lugares</a>
           <ul class="submenu">
                 <li><a href="../places/insert_place.php">Crear lugares</a></li>
                 <li><a href="../places/list_places.php">Ver lugares</a></li>
           </ul>
       </li>
       <li><a href="#">   Organizaciones</a>
           <ul class="submenu">
                 <li><a href="../organization/create_organization.php">Crear organizaciones</a></li>
                 <li><a href="../organization/report_organization.php">Ver organizaciones</a></li>
           </ul>
       </li>
       <li><a href="#">   Patrocinadores</a>
           <ul class="submenu">
                  <li><a href="../sponsors/create_sponsors.php">Crear patrocinadores</a></li>
                 <li><a href="../sponsors/list_sponsors.php">Ver  patrocinadores</a></li>
           </ul>
       </li>
       <li><a href="#">   Academias</a>
           <ul class="submenu">
                 <li><a href="../academies/insert_academy.php">Crear academias</a></li>
                 <li><a href="../academies/show_academies.php">Ver academias</a></li>
           </ul>
       </li>
       <li><a href="#">   Reportes</a>
           <ul class="submenu">
                 <li><a href="../reports/generate_event_results.php">Ver resultados de eventos</a></li>
                 <li><a href="../reports/athletes_list_history.php">Ver historial usuario</a></li>
           </ul>
       </li>
        <li id="assistent"><a href="#">   Sistema</a>
           <ul class="submenu">
                 <li><a href="../system_settings/create_settings.php">Parámetros</a></li>
           </ul>
       </li>
       </div>
  <?php }
}
class TemplateHandlerUsertypeAssistant extends TemplateHandler{

   public function renderSideNavBar(){?>
   <div id="assistent">
          <li><a href="#">   Usuarios</a>
           <ul class="submenu">
                 <li><a href="../users/insert_user.php"> Crear usuarios</a></li>
                 <li><a href="../users/list_users.php">Ver usuarios</a></li>
           </ul>
       </li>
       <li><a href="#">   Eventos</a>
           <ul class="submenu">
                <li><a href="../event/settingUpEvent.php">Crear eventos</a></li>
                <li><a href="../event/event_list.php">Ver eventos</a></li>
           </ul>
       </li>
       <li><a href="#">   Lugares</a>
           <ul class="submenu">
                 <li><a href="../places/insert_place.php">Crear lugares</a></li>
                 <li><a href="../places/list_places.php">Ver lugares</a></li>
           </ul>
       </li>
       <li><a href="#">   Organizaciones</a>
           <ul class="submenu">
                 <li><a href="../organization/create_organization.php">Crear organizaciones</a></li>
                 <li><a href="../organization/report_organization.php">Ver organizaciones</a></li>
           </ul>
       </li>
       <li><a href="#">   Patrocinadores</a>
           <ul class="submenu">
                  <li><a href="../sponsors/create_sponsors.php">Crear patrocinadores</a></li>
                 <li><a href="../sponsors/list_sponsors.php">Ver  patrocinadores</a></li>
           </ul>
       </li>
       <li><a href="#">   Academias</a>
           <ul class="submenu">
                 <li><a href="../academies/insert_academy.php">Crear academias</a></li>
                 <li><a href="../academies/show_academies.php">Ver academias</a></li>
           </ul>
       </li>
       <li><a href="#">   Reportes</a>
           <ul class="submenu">
                 <li><a href="../reports/generate_event_results.php">Ver resultados de eventos</a></li>
                 <li><a href="../reports/athletes_list_history.php">Ver historial usuario</a></li>
           </ul>
       </li>

       </div>




  <?php }




}

class TemplateHandlerUsertypeProfessor extends TemplateHandler{
  public function renderSideNavBar(){ ?>
    <div id="teacher">
      <li><a href="#">   Alumnos</a>
        <ul class="submenu">
              <li><a href="../../views/users/insert_student.php">Ingresar alumnos</a></li>
              <li><a href="../../views/users/list_student.php">Ver alumnos</a></li>
        </ul>
    </li>
    <li><a href="#">   Eventos</a>
        <ul class="submenu">
              <li><a href="../event/eventsAssigned.php">Ver eventos</a></li>
        </ul>
    </li>
    <li><a href="#">   Reportes</a>
        <ul class="submenu">
              <li><a href="../reports/generate_event_results.php">Ver resultados de eventos</a></li>
              <li><a href="../reports/athletes_list_history.php">Ver historial usuario</a></li>
       </ul>
    </li>
    </div>
  <?php }
}

class TemplateHandlerUsertypeStudent extends TemplateHandler{
  public function renderSideNavBar(){ ?>
    <div id="student">
       <li><a href="#">   Eventos</a>
         <ul class="submenu">
               <li><a href="../event/eventsAssignedToStudent.php">Ver eventos</a></li>
         </ul>
     </li>
     <li><a href="#">   Reportes</a>
         <ul class="submenu">
               <li><a href="../reports/generate_event_results.php">Ver resultados de eventos</a></li>
                <li><a href="../reports/athlete_history.php">Ver historial</a></li>
        </ul>
     </li>
     </div>
  <?php }
}
?>
