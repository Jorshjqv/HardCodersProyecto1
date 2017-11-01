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
                    <h2>Agregar patrocinadores</h2>
                  </div>
                  <div id="alert">

                  </div>
                  <form id="upload_img" enctype="multipart/form-data" name ="upload_img">
                    <div class="form-body">
                        <div class="column-left">
                          <div class="group">
                             <label for="txtSocialReason">Razón Social</label>
                             <input type="text" id="txtSocialReason" required>
                           </div>

                          <div class="group">
                           <label for="txtDescription">Descripción</label>
                           <input type="text" id="txtDescription" required>
                         </div>

                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                        </div>

                        <div class="column-right">

                          <div class="group">
                            <label for="txtSponsorName">Nombre</label>
                            <input type="text" id="txtSponsorName" required>
                          </div>
                          <div class="group">
                            <input type="file" id="imgInput" class="inputImgHdn">
                            <label for="imgInput" class="btn btnImportant">Agregar logo</label>

                          </div>
                           <div class="group">
                           <ponga su label aqui>
			    <ponga su input aqui>
                          </div>


                          <div class="group">
                            <ponga su label aqui>
			    <ponga su input aqui>
                          </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="product-form" id="form">
                                    <h3>Productos</h3>
                                    <div class="product-form-body">
                                      <form >
                                        <div class="column-left" id="prodColumnLeft">
                                          <div class="group">
                                            <label for="txtProductName">Nombre</label>
                                            <input type="text" id="txtProductName" class="prodName" required>
                                          </div>
                                        </div>
                                        <div class="column-right" id="prodColumnRight">
                                          <div class="group">
                                            <label for="txtProductDesc">Descripción</label>
                                            <input id="txtProductDesc" class="prodDesc" type="text" required>
                                         </div>
                                        </div>


                                        <div class="clearfix">

                                        </div>
                                      </form>

                                    </div>

                                    <div class="product-form-footer">
                                      <div class="group">
                                      <input type="button" id="btnAddProduct" value="Agregar producto" onclick="addNewProduct();" class="btn btnImportant">
                                     </div>
                                    </div>
                                  </div>
                   <div class="form-footer">
                      <input type="button" value="CREAR" class="btn btnImportant" id="btnInsertSponsor" onclick="getRegistryData();">
                    </div>
                  </form>

               </div>
          </div>
          </div>
          <?php
            $templateHandle->templateHandler->renderAllUtilScripts();
          ?>
          <script
        src="http://code.jquery.com/jquery-3.2.1.js"
        integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
        crossorigin="anonymous"></script>
<script src="../../js/sponsors/logicaNegociosPatrocinador.js"></script>
<script src="../../js/sponsors/create_sponsor_presentation_logic.js"></script>
	</body>
</html>
