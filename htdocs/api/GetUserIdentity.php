<?php 
function GetUserIdentity(){
    $ip = $_SERVER['REMOTE_ADDR'];
    $time=time();
    return $ip.$time;
}
?>