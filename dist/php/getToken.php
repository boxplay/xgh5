<?php
ini_set("display_errors", "On");
error_reporting(E_ALL);
require_once "jssdk.php";
$url = $_POST['reqUrl'];
$jssdk = new JSSDK("wxe6d6d272174c5278", "8f04a2e20f3c9cc49559e3737ae55c3d",$url);
echo json_encode($jssdk->getSignPackage());
?>