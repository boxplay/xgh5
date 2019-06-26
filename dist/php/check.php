<?php
define('TOKEN','xiguaplay'); 
function checkSignature()
{
	$signature = $_GET["signature"];
	$timestamp = $_GET["timestamp"];
	$nonce = $_GET["nonce"];

	$tmpArr = array($timestamp, $nonce);
	sort($tmpArr, SORT_STRING);
	$tmpStr = implode( $tmpArr );
	$tmpStr = sha1( $tmpStr );

	if($signature){
		return true;
	}else{
		return false;
	}
}
if(checkSignature())
 {    
	//返回echostr
	$echostr = $_GET['echostr'];
	if($echostr)   
	{
		echo $echostr;
		exit;
	}else{
		echo 'error';
		die;
	}
}