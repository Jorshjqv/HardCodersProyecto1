<!DOCTYPE html>
<html>
	<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Federación Costarricense de Taekwondo</title>
        <link rel="icon" href="../../images/landingPageImg/ftcIcon.png">
        <link rel="stylesheet" href="../../css/general/reset.css">
				<link rel="stylesheet" href="../../css/font/font.css">
        <link rel="stylesheet" href="../../css/general/general.css">
        <link rel="stylesheet" href="../../css/general/menus.css">
        <link rel="stylesheet" href="../../css/general/forms.css">
        <link rel="stylesheet" href="../../css/general/tables.css">
        <link rel="stylesheet" href="../../css/general/alerts.css">
        <link rel="stylesheet" href="../../css/general/navbar.css">
        <link rel="stylesheet" href="../../css/general/alignment.css">
        <link rel="stylesheet" href="../../css/home/landing_page.css">
        <link rel="stylesheet" href="../../css/login/login.css">
	</head>
	<body>
	 <!-- Navigation Section -->
          <header class="navbar navbar-fixed-top custom-navbar">
               <nav class="container">
                   <!-- navbar header -->
                    <div id="navbar-title" class="navbar-header navSize">
                    	<div class="imgLogo logo-style"><img src="../../images/landingPageImg/ftcIcon.png" height="32" width="32"></div>
                    	<div class="alingNav">
                    	<strong><h3 id="lili" class="color-white">Federación Costarricense de Taekwondo</h3></strong>
                    	</div>
                    </div>
                    <div>
											<ul class="nav navbar-nav navbar-right " id="btnNav">
												<li><a href="../home/index.php" >Inicio</a></li>
												<li><a href="../home/documents.php">Documentos</a></li>
												<li><a href="../home/contact.php">Contacto</a></li>
												<li><a href="../event/events_calendar.html">Eventos</a></li>
												<li><a href="./login.php">Iniciar sesión</a></li>
											</ul>
                    </div>
               </nav>
          </header>
		<div class="containerSession">
		<div class="forms marginTopCenter" id="form">
			<div class="form-header noBorder">
                <h2>Inicio de sesión</h2>
            </div>
            <div id="alert" class="normal">

            </div>

			<form>
				<div class="form-body inputsAlignCenter noBorder">
					<input type="text" id="txtUsername" placeholder="Nombre de usuario" class="margin30 loginInput">
					<input type="password" id="txtPassword" placeholder="Contraseña" class="margin30 loginInput">
				</div>

				<div class="form-footer">
					<input type="button" id="btnSubmit" class="btn btnImportant margin30" value="Entrar">
					<br>
					<a href="./password_retrieval.php">Recuperar contraseña</a>
			</div>
			</form>
		</div>
		</div>
	</body>
	<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
	<script src="../../js/util/messages.js"></script>
	<script src="../../js/util/validation_module.js"></script>
	<script src="../../js/login/login_busi_logic.js"></script>
	<script src="../../js/login/login_interface_logic.js"></script>
</html>
