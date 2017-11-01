<?php

$loginctrl = new LoginHandler();
$loginctrl->CheckIfSessionExists();
$templateHandle = $loginctrl->invokeTemplateHandler();
?>

<?php
$templateHandle->templateHandler->renderTemplateCSS();
?>

<?php
$templateHandle->templateHandler->renderTopnavBar();
?>
<?php
$templateHandle->templateHandler->renderSideNavBar();
?>
<?php
$templateHandle->templateHandler->renderSearchBar();
?>
<?php
$templateHandle->templateHandler->renderAllUtilScripts();
?>
