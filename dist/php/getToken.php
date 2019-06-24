<?php
ini_set("display_errors", "On");
error_reporting(E_ALL);
require_once "jssdk.php";
$url = $_POST['reqUrl'];
$jssdk = new JSSDK("wxb83633a7c4d934ab", "7cb05989b511ae6e369fa724b5b4d5e3",$url);
echo json_encode($jssdk->getSignPackage());
?>